'use strict';

/** Check if the required asset tag is present in the document */
const isScriptPresent = (src) => document.querySelector(`head script[src="${src}"]`) !== null;
/** Inject the Asset.js script tag if it hasn't been requested yet */
const injectScriptSrc = ({ src, onInit, onLoad, }) => {
  var _a;
  if (isScriptPresent(src))
    return;
  const script = document.createElement('script');
  script.setAttribute('src', src);
  onInit === null || onInit === void 0 ? void 0 : onInit();
  script.addEventListener('load', onLoad);
  (_a = document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.appendChild(script);
};

const createPlotContainer = (root) => {
  const plotContainer = document.createElement('div');
  const pic = root.querySelector('picture');
  const targetEl = pic !== null && pic !== void 0 ? pic : root;
  targetEl.appendChild(plotContainer);
  return plotContainer;
};

exports.createPlotContainer = createPlotContainer;
exports.injectScriptSrc = injectScriptSrc;

//# sourceMappingURL=imageDynamicUtils-7655c374.js.map