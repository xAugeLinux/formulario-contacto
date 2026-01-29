// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
const isGithub = process.env.DEPLOY_TARGET === 'github';

export default defineConfig({
  site: isGithub ? 'https://xaugelinux.github.io' : undefined,
  base: isGithub ? '/formulario-contacto/' : '/',
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

