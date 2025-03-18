// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel({
    imageService: true,
    devImageService: 'sharp',
  }),

  image: {    
    remotePatterns: [{
      protocol: 'https',
      hostname: 'hispacams.com',
    }],
  },
});