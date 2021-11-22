import { getMode } from '@stencil/core'
import WebFont from 'webfontloader'

export const loadFonts = (fontFamilies?: string[]) => {
  let families = fontFamilies

  if (!families) {
    const mode = getMode(document.documentElement)
    families =
      mode === 'material'
        ? ['Roboto', 'IBM Plex Mono']
        : ['Montserrat:400,600', 'Lato:400,400i,700,700i', 'IBM Plex Mono']
  }

  WebFont.load({
    google: {
      families,
    },
  })
}
