import { Component, Element, h, Host } from '@stencil/core';
export class CodeDependencies {
  render() {
    var _a, _b, _c, _d, _e;
    return (h(Host, null,
      ((_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.children.length) !== null && _b !== void 0 ? _b : 0) > 0 &&
        (((_c = this.el) === null || _c === void 0 ? void 0 : _c.slot) === 'code-dependencies' ? (h("stencila-menu-item", { divider: true }, "Upstream dependencies")) : ((_d = this.el) === null || _d === void 0 ? void 0 : _d.slot) === 'code-dependents' ? (h("stencila-menu-item", { divider: true }, "Downstream dependents")) : null),
      ((_e = this.el) === null || _e === void 0 ? void 0 : _e.querySelectorAll('stencila-code-dependency').length) == 0 ? (h("div", { class: "none" }, "None")) : null,
      h("slot", null)));
  }
  static get is() { return "stencila-code-dependencies"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["codeDependencies.css"],
    "material": ["codeDependencies.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["codeDependencies.css"],
    "material": ["codeDependencies.material.css"]
  }; }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=codeDependencies.js.map