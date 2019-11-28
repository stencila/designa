import purgecss from '@fullhuman/postcss-purgecss'
import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import path from 'path'
import cssImport from 'postcss-import'
import tailwind from 'tailwindcss'

const tailwindConfigPath = path.join(
  __dirname,
  '..',
  '..',
  'tailwind.config.js'
)

const purgeCSS =
  process.env.NODE_ENV === 'production'
    ? [
        purgecss({
          content: ['./src/**/*.html', './src/**/*.tsx'],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
      ]
    : []

export const config: Config = {
  namespace: 'stencila-components',
  globalScript: './src/globals/global.ts',
  globalStyle: './src/globals/variables.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-json',
      file: 'dist/stencila-components.json'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'dist-global-styles',
      file: './dist/stencila-components-styles.css'
    }
  ],
  plugins: [
    postcss({
      // TODO: This is needed to include CSS variables with component styles
      // However it does not currently work with Scoped components
      // injectGlobalPaths: ['src/globals/variables.css'],
      plugins: [cssImport(), tailwind(tailwindConfigPath), ...purgeCSS]
    })
  ]
}
