import { Fragment, h } from '@stencil/core';
const getProperties = (valueEl) => {
  var _a, _b, _c, _d;
  return {
    default: (_a = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('placeholder')) !== null && _a !== void 0 ? _a : undefined,
    minLength: (_b = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('minLength')) !== null && _b !== void 0 ? _b : undefined,
    maxLength: (_c = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('maxLength')) !== null && _c !== void 0 ? _c : undefined,
    pattern: (_d = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('pattern')) !== null && _d !== void 0 ? _d : undefined,
  };
};
export const StringValidator = ({ valueEl, }) => {
  const values = getProperties(valueEl);
  return (h(Fragment, null,
    h("label", null,
      "Default value",
      h("input", { type: "text", name: "default", value: values.default })),
    h("label", null,
      "Minimum length",
      h("input", { type: "number", step: "1", name: "minLength", value: values.minLength, min: "0" })),
    h("label", null,
      "Maximum length",
      h("input", { type: "number", step: "1", name: "maxLength", value: values.maxLength })),
    h("label", null,
      "Pattern (RegEx)",
      h("input", { type: "text", name: "pattern", value: values.pattern }))));
};
//# sourceMappingURL=stringValidator.js.map