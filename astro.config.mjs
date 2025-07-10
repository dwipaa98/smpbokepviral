// astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://smpbokepviral.pages.dev',
  output: 'server',
  adapter: cloudflare(),
  integrations: [
  ],
  vite: {
    ssr: {
      noExternal: ['node:fs', 'node:path'],
    },
  },
});