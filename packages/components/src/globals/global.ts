import { setMode } from '@stencil/core'
import WebFont from 'webfontloader'

// Global mode (theme) configuration based on https://stackoverflow.com/a/56530775
const getMode = (el: HTMLElement): string => {
  return (
    el.getAttribute('mode') ??
    document.querySelector('html')?.getAttribute('mode') ??
    'default'
  )
}

setMode((el) => getMode(el))

const mode = getMode(document.documentElement)

const families =
  mode === 'material'
    ? ['Roboto', 'IBM Plex Mono']
    : ['Montserrat:400,600', 'Lato:400,400i,700,700i', 'IBM Plex Mono']

// These version numbers are automatically updated when releasing new versions.
// see `../../scripts/prepare.mjs`
const stencilaThemeVersion = 'latest'
const materialThemeVersion = 'latest'

const themeName = mode === 'material' ? 'material' : 'stencila'

const themeVersion =
  mode === 'material' ? materialThemeVersion : stencilaThemeVersion

// Inject theme CSS variables depending on the `mode` attribute
const injectThemeVariables = () => {
  const themeVariables = document.createElement('link')
  themeVariables.rel = 'stylesheet'
  themeVariables.href = `https://unpkg.com/@stencila/style-${themeName}@${
    themeVersion ?? 'latest'
  }/dist/variables.css`

  document.head.prepend(themeVariables)
}

export default function (): void {
  WebFont.load({
    google: {
      families,
    },
  })

  injectThemeVariables()
}
