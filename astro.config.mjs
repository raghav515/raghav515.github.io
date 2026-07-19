import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.raghavendrajadhav.in',
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});