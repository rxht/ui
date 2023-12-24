import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import eslintPlugin from 'vite-plugin-eslint';

const resolve = (dir: string) => path.resolve(__dirname, dir);

// 文档: https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('../src'),
      Packages: resolve('../packages'),
      Iconfont: resolve('../iconfont')
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown(),
    eslintPlugin()
  ]
});
