// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';
import deno from '@deno/astro-adapter';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: deno(),
  vite: {
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});