import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://over-over.github.io/',
  base: 'wanderlust',
  output: 'static',
  outDir: './docs',
  integrations: [react()],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
