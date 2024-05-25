import { __defineConfig } from '@lotsof/config';
import { __dirname } from '@lotsof/sugar/fs';

__defineConfig({
  docmap: {
    settings: {
      docblock: {
        settings: {
          renderMarkdown: true,
        },
      },
    },
    build: {
      outPath: null,
      outDir: `${__dirname()}/content/doc`,
      mdx: true,
      json: false,
    },
  },
});
