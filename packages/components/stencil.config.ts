import purgecss from '@fullhuman/postcss-purgecss'
import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import cssImport from 'postcss-import'

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
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    postcss({
      plugins: [cssImport(), ...purgeCSS]
    })
  ]
}
