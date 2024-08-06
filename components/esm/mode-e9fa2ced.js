// Global mode (theme) configuration based on https://stackoverflow.com/a/56530775
const getMode = (el) => {
  var _a, _b, _c;
  return (_c = (_a = el.getAttribute('mode')) !== null && _a !== void 0 ? _a : (_b = document.querySelector('html')) === null || _b === void 0 ? void 0 : _b.getAttribute('mode')) !== null && _c !== void 0 ? _c : 'default';
};

export { getMode as g };

//# sourceMappingURL=mode-e9fa2ced.js.map