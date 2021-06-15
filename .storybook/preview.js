import { create } from '@storybook/theming'
import { addParameters, setCustomElements } from '@storybook/web-components'
import customElements from '../packages/components/dist/custom-elements.json'

// https://storybook.js.org/docs/configurations/theming/
const theme = create({
  colorPrimary: '#1d63f3',
  colorSecondary: '#1d63f3',
  fontBase: 'Montserrat, Nunito, "Open Sans", sans-serif',
  fontCode: 'IBM Plex, monospace',
  brandTitle: 'Stencila',
  brandUrl: 'https://stenci.la',
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

setCustomElements(customElements)

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true,
    },
  },
  docs: { theme: theme },
  options: {
    storySort: atomicSort,
  },
})
