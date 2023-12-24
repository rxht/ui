import baseConfig from './base.config';
import { defineConfig } from 'vite';

const isProd = process.env.NODE_ENV === "production";
const base = isProd ? `/ui/` : "/";

export default defineConfig({
  ...baseConfig,
  base,
  build: {
    outDir: 'docs'
  }
});
