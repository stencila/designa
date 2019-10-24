/* eslint-disable @stencil/ban-side-effects */
import { setMode } from '@stencil/core'
// @ts-ignore
import WebFont from 'webfontloader'

// Global mode (theme) configuration based on https://stackoverflow.com/a/56530775
const getMode = (el: HTMLElement): string => {
  const elMode = el.getAttribute('mode')
  return elMode === null ? 'default' : elMode
}

setMode(el => getMode(el))

const mode = getMode(document.documentElement)

const families =
  mode === 'material'
    ? ['Roboto', 'IBM Plex Mono']
    : ['Nunito', 'IBM Plex Mono']

WebFont.load({
  google: {
    families
  }
})
