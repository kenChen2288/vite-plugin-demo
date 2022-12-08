# vite-plugin-svelte-vsvg

Import SVG files as Svelte Components

## Installation

```
npm install --save-dev vite-plugin-svelte-vsvg
```

## Usage

vite.config.ts

```
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import svelteSvg from 'vite-plugin-svelte-vsvg'
export default defineConfig({
  plugins: [
    svelteSvg({
      enforce: 'pre',
      svgo: {
        // svgo options
      },
    }),
    svelte({
      // add .svg extension
      extensions: ['.svelte', '.svg'],
    }),
  ],
})

```

## License

[MIT](./LICENSE)
