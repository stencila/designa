import { getMode } from '@stencil/core';
export const loadFonts = async (fontFamilies) => {
  if (window === undefined || document === undefined)
    return;
  const WebFont = await import('webfontloader');
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
//# sourceMappingURL=fonts.js.map