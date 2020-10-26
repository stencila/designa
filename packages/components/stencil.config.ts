import purgecss from '@fullhuman/postcss-purgecss'
import { Config } from '@stencil/core'
import { postcss } from '@stencil/postcss'
import path from 'path'
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
  buildEs5: 'prod',
  extras: {
    appendChildSlotFix: true,
    safari10: true,
  },
  globalScript: './src/globals/global.ts',
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
      plugins: [tailwind(tailwindConfigPath), ...prodPlugins],
    }),
  ],
  testing: {
    allowableMismatchedRatio: 0.15,
    transform: {
      '^.+\\.(ts|tsx|jsx|js|css)$':
        '<rootDir>/node_modules/@stencil/core/testing/jest-preprocessor.js',
    },
    transformIgnorePatterns: ['node_modules/(?!(@nll|fp-ts)/)'],
  },
}
