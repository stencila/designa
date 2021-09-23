/** Check if the required asset tag is present in the document */
const isScriptPresent = (src) => document.querySelector(`head script[src="${src}"]`) !== null;
/** Inject the Asset.js script tag if it hasn't been requested yet */
export const injectScriptSrc = ({ src, onInit, onLoad, }) => {
  var _a;
  if (isScriptPresent(src))
    return;
  const script = document.createElement('script');
  script.setAttribute('src', src);
  onInit === null || onInit === void 0 ? void 0 : onInit();
  script.addEventListener('load', onLoad);
  (_a = document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.appendChild(script);
};
