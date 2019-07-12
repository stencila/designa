import { setMode } from '@stencil/core'
import WebFont from 'webfontloader'

// Global mode (theme) configuration based on https://stackoverflow.com/a/56530775
const documentElement = document.documentElement
const mode =
  (documentElement && documentElement.getAttribute('mode')) || 'default'
setMode((elm): string => (elm as any).mode || mode)

const families =
  mode === 'material'
    ? ['Roboto', 'IBM Plex Mono']
    : ['Nunito', 'IBM Plex Mono']

WebFont.load({
  google: {
    families
  }
})
