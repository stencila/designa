import purgecss from '@fullhuman/postcss-purgecss'
import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import path from 'path'
import cssImport from 'postcss-import'
import tailwind from 'tailwindcss'
import { generateJsonDocs } from './jsonDocTransformer'

const tailwindConfigPath = path.join(
  __dirname,
  '..',
  '..',
  'tailwind.config.js'
)

const prodPlugins =
  process.env.NODE_ENV === 'production'
    ? [
        purgecss({
          content: ['./src/**/*.html', './src/**/*.tsx'],
          defaultExtractor: (content) =>
            content.match(/[A-Za-z0-9-_:/]+/g) || [],
        }),
      ]
    : []

export const config: Config = {
  namespace: 'stencila-components',
  globalScript: './src/globals/global.ts',
  globalStyle: './src/globals/variables.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'custom',
      generator: generateJsonDocs,
      name: 'custom-element-docs',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    postcss({
      // TODO: This is needed to include CSS variables with component styles
      // However it does not currently work with Scoped components
      // injectGlobalPaths: ['src/globals/variables.css'],
      plugins: [
        require('postcss-import'),
        require('tailwindcss')(tailwindConfigPath),
        ...prodPlugins,
      ],
    }),
  ],
}
