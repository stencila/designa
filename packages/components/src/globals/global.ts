import { setMode } from '@stencil/core'

// Global mode (theme) configuration based on https://stackoverflow.com/a/56530775
const documentElement = document.documentElement
setMode(
  elm => (elm as any).mode || documentElement.getAttribute('mode') || 'default'
)
