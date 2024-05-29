import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  outDir: './docs',
  integrations: [react()],
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
});
