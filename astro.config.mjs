// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://xaugelinux.github.io',
  base: '/formulario-contacto/',
  output: 'static',

  compressHTML: true,

  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 10240,
    },
  },

  integrations: [react()],
});
