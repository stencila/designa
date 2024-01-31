import { Fragment, h } from '@stencil/core';
export const ConstantValidator = () => {
  return (h(Fragment, null,
    h("label", null,
      "Value",
      h("input", { name: "value" }))));
};
//# sourceMappingURL=constantValidator.js.map