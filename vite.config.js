import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Fortuna-Packaging/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    target: 'es2020',
    cssCodeSplit: true,
    minify: 'esbuild',
  },
  esbuild: {
    drop: ['console', 'debugger'],
    legalComments: 'none',
  },
});
