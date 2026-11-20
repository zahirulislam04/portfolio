// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zahirulislam.dev',
  integrations: [sitemap()],
  server: { host: true },
  vite: {
    plugins: [tailwindcss()]
  }
});
