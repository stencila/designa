import { Fragment, h } from '@stencil/core';
const getProperties = (valueEl) => {
  var _a, _b, _c, _d;
  return {
    default: (_b = (_a = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('placeholder')) !== null && _a !== void 0 ? _a : valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('value')) !== null && _b !== void 0 ? _b : undefined,
    minimum: (_c = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('min')) !== null && _c !== void 0 ? _c : undefined,
    maximum: (_d = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('max')) !== null && _d !== void 0 ? _d : undefined,
  };
};
export const NumberValidator = ({ valueEl, }) => {
  const values = getProperties(valueEl);
  return (h(Fragment, null,
    h("label", null,
      "Default value",
      h("input", { type: "number", name: "default", step: "any", value: values.default })),
    h("label", null,
      "Minimum",
      h("input", { type: "number", name: "minimum", step: "any", value: values.minimum })),
    h("label", null,
      "Maximum",
      h("input", { type: "number", name: "maximum", step: "any", value: values.maximum }))));
};
//# sourceMappingURL=numberValidator.js.map