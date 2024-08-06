export { C as CodeExecuteStatus } from './codeExecuteStatus-b83cc6dd.js';
export { l as FileFormatUtils } from './languageUtils-2c49a4c4.js';
export { t as Toast } from './toastController-5becfc9e.js';
import { g as getMode } from './index-2305c23c.js';
import { g as getMode$1 } from './mode-e9fa2ced.js';
import './codeUtils-6d110640.js';
import './_commonjsHelpers-9943807e.js';

const loadFonts = async (fontFamilies) => {
  if (window === undefined || document === undefined)
    return;
  const WebFont = await import('./webfontloader-bdd8de6e.js').then(function (n) { return n.w; });
  let families = fontFamilies;
  if (!families) {
    const mode = getMode(document.documentElement);
    families =
      mode === 'material'
        ? ['Roboto', 'IBM Plex Mono']
        : ['Montserrat:400,600', 'Lato:400,400i,700,700i', 'IBM Plex Mono'];
  }
  WebFont.load({
    google: {
      families,
    },
  });
};

// These version numbers are automatically updated when releasing new versions.
// see `../../scripts/prepare.mjs`
const stencilaThemeVersion = 'latest';
const materialThemeVersion = 'latest';
// Inject theme CSS variables depending on the `mode` attribute
const injectThemeVariables = () => {
  const mode = getMode$1(document.documentElement);
  const themeName = mode === 'material' ? 'material' : 'stencila';
  const themeVersion = mode === 'material' ? materialThemeVersion : stencilaThemeVersion;
  const themeVariables = document.createElement('link');
  themeVariables.rel = 'stylesheet';
  themeVariables.href = `https://unpkg.com/@stencila/style-${themeName}@${themeVersion !== null && themeVersion !== void 0 ? themeVersion : 'latest'}/dist/variables.css`;
  document.head.prepend(themeVariables);
};

export { injectThemeVariables, loadFonts };

//# sourceMappingURL=index.js.map