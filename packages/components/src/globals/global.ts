/* eslint-disable @stencil/ban-side-effects */
import { setMode } from '@stencil/core'
// @ts-ignore
import WebFont from 'webfontloader'

// Global mode (theme) configuration based on https://stackoverflow.com/a/56530775
const getMode = (el: HTMLElement): string => {
  return (
    el.getAttribute('mode') ||
    document.querySelector('html')?.getAttribute('mode') ||
    'default'
  )
}

setMode(el => getMode(el))

const mode = getMode(document.documentElement)

const families =
  mode === 'material'
    ? ['Roboto', 'IBM Plex Mono']
    : ['Montserrat', 'IBM Plex Mono']

WebFont.load({
  google: {
    families
  }
})
