import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  define: {
    global: 'globalThis',
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, 'src/01-gallery.html'),
      },
    },
  },
});
