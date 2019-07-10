import { withA11y } from '@storybook/addon-a11y'
import { withCssResources } from '@storybook/addon-cssresources'
import { addDecorator, addParameters, configure } from '@storybook/html'
import { create } from '@storybook/theming'
import { withRootAttribute } from 'storybook-addon-root-attribute'

const cssresources = [
  {
    id: `Stencila`,
    code: `<link rel="stylesheet" type="text/css" href="/index-stencila.css"></link>`,
    picked: false
  },
  {
    id: `Material`,
    code: `<link rel="stylesheet" type="text/css" href="/index-material.css"></link>`,
    picked: true
  }
]

addDecorator(withA11y)
addDecorator(withCssResources)
addDecorator(withRootAttribute)

const theme = create({
  // base: "normal",

  // colorPrimary: "#5eff5d",
  // colorSecondary: "rgba(29, 99, 243, 0.6)",

  // // UI
  // appBg: "white",
  // appContentBg: "#fafafa",
  // appBorderColor: "grey",
  // appBorderRadius: 4,

  // // Typography
  fontBase: 'Nunito, "Open Sans", sans-serif',
  fontCode: 'monospace',

  // // Text colors
  // textColor: "#333333",
  // textInverseColor: "rgba(255,255,255,0.9)",

  // // Toolbar default and active colors
  // barTextColor: "#333333",
  // barSelectedColor: "black",
  // barBg: "#b5b5b5",

  // // Form colors
  // inputBg: "white",
  // inputBorder: "silver",
  // inputTextColor: "black",
  // inputBorderRadius: 4,

  brandTitle: 'Stencila Designa',
  brandUrl: 'https://stenci.la'
  // brandImage: "https://stenci.la/img/logo.svg"
})

addParameters({
  a11y: {
    config: {},
    options: {
      checks: { 'color-contrast': { options: { noScroll: true } } },
      restoreScroll: true
    }
  },
  cssresources,
  options: {
    theme
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

const req = require.context('../stories', true, /\.stories\.js$/)
const loadStories = () => {
  // NOTE: Commment/Uncomment the following line to compare different WebComponent themes
  //  document.documentElement.setAttribute('mode', 'material')

  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
