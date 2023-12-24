import baseConfig from './base.config';
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

const resolve = (dir: string) => path.resolve(__dirname, dir);

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve('../packages/index.ts'),
      name: 'rxhui',
      fileName: (format) => `rxhui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        exports: 'named',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [...(baseConfig as any).plugins, dts()],
});
