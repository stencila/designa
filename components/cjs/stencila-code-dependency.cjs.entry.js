'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const codeExecuteStatus = require('./codeExecuteStatus-66a7ce5a.js');
require('./codeUtils-9e5f6d23.js');

const defaultCodeDependencyCss = ".sc-stencila-code-dependency-default-h,stencila-code-dependency.sc-stencila-code-dependency-default{display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.75rem;line-height:1rem;padding:.5rem}.sc-stencila-code-dependency-default-h a.sc-stencila-code-dependency-default,.sc-stencila-code-dependency-default-h a.sc-stencila-code-dependency-default:link,.sc-stencila-code-dependency-default-h a.sc-stencila-code-dependency-default:visited,stencila-code-dependency.sc-stencila-code-dependency-default a.sc-stencila-code-dependency-default,stencila-code-dependency.sc-stencila-code-dependency-default a.sc-stencila-code-dependency-default:link,stencila-code-dependency.sc-stencila-code-dependency-default a.sc-stencila-code-dependency-default:visited{color:#444a5e;color:var(--color-neutral-700,#444a5e);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-text-decoration-line:none;text-decoration-line:none;width:100%}.sc-stencila-code-dependency-default-h:not(:last-of-type),stencila-code-dependency.sc-stencila-code-dependency-default:not(:last-of-type){border-bottom:1px solid var(--color-neutral-100)}.sc-stencila-code-dependency-default-h stencila-tooltip.sc-stencila-code-dependency-default,stencila-code-dependency.sc-stencila-code-dependency-default stencila-tooltip.sc-stencila-code-dependency-default{line-height:2;vertical-align:middle}.sc-stencila-code-dependency-default-h .content.sc-stencila-code-dependency-default,stencila-code-dependency.sc-stencila-code-dependency-default .content.sc-stencila-code-dependency-default{-ms-flex-positive:1;flex-grow:1;line-height:1;padding-left:.5rem}.sc-stencila-code-dependency-default-h .label.sc-stencila-code-dependency-default,stencila-code-dependency.sc-stencila-code-dependency-default .label.sc-stencila-code-dependency-default{display:-ms-flexbox;display:flex;font-weight:700;-ms-flex-pack:justify;justify-content:space-between}.sc-stencila-code-dependency-default-h .label.sc-stencila-code-dependency-default code.sc-stencila-code-dependency-default,stencila-code-dependency.sc-stencila-code-dependency-default .label.sc-stencila-code-dependency-default code.sc-stencila-code-dependency-default{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);border:1px solid #b6bacf;border-color:var(--color-neutral-200,#b6bacf);border-radius:.25rem;font-family:monospace;font-family:var(--font-family-mono,monospace);font-weight:400;padding:1px}";

const codeDependencyMaterialCss = "";

const CodeDependency = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    var _a;
    const [href, target] = this.nodeKind === 'File' && this.label
      ? [this.label, 'blank']
      : [`#${this.nodeId}`, ''];
    return (index.h(index.Host, null, index.h("a", { href: href, target: target }, index.h(codeExecuteStatus.CodeExecuteStatus, { executeStatus: this.executeStatus, executeRequired: this.executeRequired, nodeKind: this.nodeKind }), index.h("div", { class: "content" }, index.h("div", { class: "label" }, (_a = this.label) !== null && _a !== void 0 ? _a : this.nodeId, this.programmingLanguage !== undefined && (index.h("code", null, this.programmingLanguage))), index.h("div", null, index.h("span", { class: "status" }, this.nodeKind))))));
  }
};
CodeDependency.style = {
  default: defaultCodeDependencyCss,
  material: codeDependencyMaterialCss
};

exports.stencila_code_dependency = CodeDependency;

//# sourceMappingURL=stencila-code-dependency.cjs.entry.js.map