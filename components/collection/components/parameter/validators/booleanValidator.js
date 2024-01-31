import { Fragment, h } from '@stencil/core';
const getProperties = (valueEl) => {
  var _a, _b;
  return {
    default: (_b = (_a = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('placeholder')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : undefined,
  };
};
export const BooleanValidator = ({ valueEl, }) => {
  const values = getProperties(valueEl);
  return (h(Fragment, null,
    h("label", null,
      "Default value",
      h("input", { type: "checkbox", name: "default", checked: values.default === 'true' }))));
};
//# sourceMappingURL=booleanValidator.js.map