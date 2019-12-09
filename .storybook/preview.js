import { withA11y } from '@storybook/addon-a11y'
import { withCssResources } from '@storybook/addon-cssresources'
import { withKnobs } from '@storybook/addon-knobs'
import { create } from '@storybook/theming'
import {
  addDecorator,
  addParameters,
  configure,
  setCustomElements
} from '@storybook/web-components'
import { withRootAttribute } from 'storybook-addon-root-attribute'
import customElements from '../packages/components/dist/custom-elements.json'
import { transformJSONDocs } from './jsonDocTransformer'

const cssresources = [
  {
    id: `CSS Variables`,
    code: `<link rel="stylesheet" type="text/css" href="./stencila-components/stencila-components.css"></link>`,
    picked: true
  },
  {
    id: `Stencila`,
    code: `<link rel="stylesheet" type="text/css" href="./index-stencila.css"></link>`,
    picked: true
  },
  {
    id: `Material`,
    code: `<link rel="stylesheet" type="text/css" href="./index-material.css"></link>`,
    picked: false
  }
]

// https://storybook.js.org/docs/configurations/theming/
const theme = create({
  colorPrimary: '#1d63f3',
  colorSecondary: '#1d63f3',
  fontBase: 'Montserrat, Nunito, "Open Sans", sans-serif',
  fontCode: 'IBM Plex, monospace',
  textColor: '#363636',
  textInverseColor: 'rgba(255,255,255,0.9)',
  barTextColor: '#7a7a7a',
  barBg: '#fafafa',
  brandTitle: 'Stencila Designa',
  brandUrl: 'https://stenci.la'
})

/**
 * Sorts Storybook stories in the sidebar based on the Atomic Components order:
 *   1. Atoms
 *   2. Molecules
 *   3. Objects
 *
 * @param {[string, object]} [a]
 * @param {[string, object]} [b]
 * @returns number
 */
const atomicSort = ([a], [b]) => {
  if (a.includes('atom') && b.includes('atom')) {
    return 0
  }
  if (a.includes('atom') && !b.includes('atom')) {
    return -1
  }
  if (!a.includes('atom') && b.includes('atom')) {
    return 1
  }
  if (a.includes('object') && !b.includes('object')) {
    return -1
  }

  return 0
}

setCustomElements(transformJSONDocs(customElements))

addDecorator(withA11y)
addDecorator(withCssResources)
addDecorator(withKnobs)
addDecorator(withRootAttribute)

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true
    }
  },
  cssresources,
  // docs: { disable: true },
  options: {
    theme,
    storySort: atomicSort
  },
  rootAttribute: {
    attribute: 'mode',
    defaultState: {
      name: 'Stencila',
      value: null
    },
    states: [
      {
        name: 'Material',
        value: 'material'
      }
    ]
  }
})

const req = require.context('../stories', true, /\.stories\.(js|mdx)$/)
configure(req, module)
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href
    window.history.pushState(null, null, currentLocationHref)
    window.location.reload()
  })
}
