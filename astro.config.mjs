// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://reinamultiservicios.es',
  integrations: [
    mdx(), 
    sitemap({
      entryLimit: 50000,
      filter: p => !p.includes('/legal/') && !p.includes('/gracias'),
    }),
  ]
});
