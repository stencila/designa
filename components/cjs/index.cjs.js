'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const codeExecuteStatus = require('./codeExecuteStatus-66a7ce5a.js');
const languageUtils = require('./languageUtils-85e2591f.js');
const toastController = require('./toastController-9c269d2d.js');
const index = require('./index-c157949f.js');
const mode = require('./mode-4e30c3c8.js');
require('./codeUtils-9e5f6d23.js');
require('./_commonjsHelpers-537d719a.js');

const loadFonts = async (fontFamilies) => {
  if (window === undefined || document === undefined)
    return;
  const WebFont = await Promise.resolve().then(function () { return require('./webfontloader-9ec19092.js'); }).then(function (n) { return n.webfontloader; });
  let families = fontFamilies;
  if (!families) {
    const mode = index.getMode(document.documentElement);
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
  const mode$1 = mode.getMode(document.documentElement);
  const themeName = mode$1 === 'material' ? 'material' : 'stencila';
  const themeVersion = mode$1 === 'material' ? materialThemeVersion : stencilaThemeVersion;
  const themeVariables = document.createElement('link');
  themeVariables.rel = 'stylesheet';
  themeVariables.href = `https://unpkg.com/@stencila/style-${themeName}@${themeVersion !== null && themeVersion !== void 0 ? themeVersion : 'latest'}/dist/variables.css`;
  document.head.prepend(themeVariables);
};

exports.CodeExecuteStatus = codeExecuteStatus.CodeExecuteStatus;
exports.FileFormatUtils = languageUtils.languageUtils;
exports.Toast = toastController.toastController;
exports.injectThemeVariables = injectThemeVariables;
exports.loadFonts = loadFonts;

//# sourceMappingURL=index.cjs.js.map