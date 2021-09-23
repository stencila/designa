import { setMode } from '@stencil/core';
import WebFont from 'webfontloader';
// Global mode (theme) configuration based on https://stackoverflow.com/a/56530775
const getMode = (el) => {
  var _a, _b, _c;
  return ((_c = (_a = el.getAttribute('mode')) !== null && _a !== void 0 ? _a : (_b = document.querySelector('html')) === null || _b === void 0 ? void 0 : _b.getAttribute('mode')) !== null && _c !== void 0 ? _c : 'default');
};
setMode((el) => getMode(el));
const mode = getMode(document.documentElement);
const families = mode === 'material'
  ? ['Roboto', 'IBM Plex Mono']
  : ['Montserrat:400,600', 'Lato:400,400i,700,700i', 'IBM Plex Mono'];
// These version numbers are automatically updated when releasing new versions.
// see `../../scripts/prepare.mjs`
const stencilaThemeVersion = 'latest';
const materialThemeVersion = 'latest';
const themeName = mode === 'material' ? 'material' : 'stencila';
const themeVersion = mode === 'material' ? materialThemeVersion : stencilaThemeVersion;
// Inject theme CSS variables depending on the `mode` attribute
const injectThemeVariables = () => {
  const themeVariables = document.createElement('link');
  themeVariables.rel = 'stylesheet';
  themeVariables.href = `https://unpkg.com/@stencila/style-${themeName}@${themeVersion !== null && themeVersion !== void 0 ? themeVersion : 'latest'}/dist/variables.css`;
  document.head.prepend(themeVariables);
};
export default function () {
  WebFont.load({
    google: {
      families,
    },
  });
  injectThemeVariables();
}
