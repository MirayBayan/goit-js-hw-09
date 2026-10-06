import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/goit-js-hw-09/',
  define: { global: 'globalThis' },
  server: { open: true },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gallery: resolve(__dirname, './src/01-gallery.html'),
        form: resolve(__dirname, './src/02-form.html'),
      },
    },
  },
});
