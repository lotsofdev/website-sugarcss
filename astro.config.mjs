import { sugarize } from '@lotsof/sugarcss';
import { defineConfig } from 'astro/config';

import __shikiLotsofTheme from './src/shikijs/lotsof.theme.json';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: sugarize({
        minify: false,
      }),
    },
    build: {
      cssMinify: false,
    },
  },
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: __shikiLotsofTheme,
      langs: [],
      wrap: true,
      transformers: [],
    },
  },
});
