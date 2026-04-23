import { defineConfig } from 'astro/config';
// @ts-check
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const isDev = process.env.NODE_ENV !== 'production';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://reinamultiservicios.es',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    mdx(),
    markdoc(),
    sitemap({
      entryLimit: 50000,
      filter: p => !p.includes('/legal/') && !p.includes('/gracias'),
    }),
    react(),
    ...(isDev ? [keystatic()] : []),
  ],
});