import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: '/assets',
    sourcemap: false,
    define: {
      'process.env': {},
    },
    lib: {
      entry: 'src/main.jsx',
      formats: ['iife'],
      name: 'gfCorpGifting',
      fileName: 'gf-corp-gifting.js',
    },
  },
});
