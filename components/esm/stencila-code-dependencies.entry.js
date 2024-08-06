import { r as registerInstance, h, e as Host, c as getElement } from './index-2305c23c.js';

const defaultCodeDependenciesCss = ".sc-stencila-code-dependencies-default-h stencila-menu-item[divider].sc-stencila-code-dependencies-default,stencila-code-dependencies.sc-stencila-code-dependencies-default stencila-menu-item[divider].sc-stencila-code-dependencies-default{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);font-size:.75rem;height:auto;line-height:1rem;line-height:2}.sc-stencila-code-dependencies-default-h .none.sc-stencila-code-dependencies-default,stencila-code-dependencies.sc-stencila-code-dependencies-default .none.sc-stencila-code-dependencies-default{display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.75rem;font-style:italic;font-weight:200;line-height:1rem;padding:.5rem}";

const codeDependenciesMaterialCss = ".sc-stencila-code-dependencies-material-h stencila-menu-item[divider].sc-stencila-code-dependencies-material,stencila-code-dependencies.sc-stencila-code-dependencies-material stencila-menu-item[divider].sc-stencila-code-dependencies-material{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);font-size:.75rem;height:auto;line-height:1rem;line-height:2}.sc-stencila-code-dependencies-material-h .none.sc-stencila-code-dependencies-material,stencila-code-dependencies.sc-stencila-code-dependencies-material .none.sc-stencila-code-dependencies-material{display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.75rem;font-style:italic;font-weight:200;line-height:1rem;padding:.5rem}";

const CodeDependencies = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    var _a, _b, _c, _d, _e;
    return (h(Host, null, ((_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.children.length) !== null && _b !== void 0 ? _b : 0) > 0 &&
      (((_c = this.el) === null || _c === void 0 ? void 0 : _c.slot) === 'code-dependencies' ? (h("stencila-menu-item", { divider: true }, "Upstream dependencies")) : ((_d = this.el) === null || _d === void 0 ? void 0 : _d.slot) === 'code-dependents' ? (h("stencila-menu-item", { divider: true }, "Downstream dependents")) : null), ((_e = this.el) === null || _e === void 0 ? void 0 : _e.querySelectorAll('stencila-code-dependency').length) == 0 ? (h("div", { class: "none" }, "None")) : null, h("slot", null)));
  }
  get el() { return getElement(this); }
};
CodeDependencies.style = {
  default: defaultCodeDependenciesCss,
  material: codeDependenciesMaterialCss
};

export { CodeDependencies as stencila_code_dependencies };

//# sourceMappingURL=stencila-code-dependencies.entry.js.map