import { getMode } from './mode'

const mode = getMode(document.documentElement)

// These version numbers are automatically updated when releasing new versions.
// see `../../scripts/prepare.mjs`
const stencilaThemeVersion = 'latest'
const materialThemeVersion = 'latest'

const themeName = mode === 'material' ? 'material' : 'stencila'

const themeVersion =
  mode === 'material' ? materialThemeVersion : stencilaThemeVersion

// Inject theme CSS variables depending on the `mode` attribute
export const injectThemeVariables = () => {
  const themeVariables = document.createElement('link')
  themeVariables.rel = 'stylesheet'
  themeVariables.href = `https://unpkg.com/@stencila/style-${themeName}@${
    themeVersion ?? 'latest'
  }/dist/variables.css`

  document.head.prepend(themeVariables)
}
