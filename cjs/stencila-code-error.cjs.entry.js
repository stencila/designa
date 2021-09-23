'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-77e1ad50.js');

const defaultErrorCss = ".sc-stencila-code-error-default-h,stencila-code-error.sc-stencila-code-error-default{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);border:1px solid #6e7591;border-color:var(--color-neutral-500,#6e7591);border-radius:.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;color:#444a5e;color:var(--color-neutral-700,#444a5e);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);max-width:100%;padding:.5rem;position:relative;width:100%}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default{padding-right:1rem}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default *.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default *.sc-stencila-code-error-default{vertical-align:middle}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default stencila-icon.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default stencila-icon.sc-stencila-code-error-default{margin-right:.5rem}.sc-stencila-code-error-default-h stencila-details.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default stencila-details.sc-stencila-code-error-default{--disclosure-icon-right:0.5rem;--disclosure-icon-top:0.5rem;display:block;position:static}.sc-stencila-code-error-default-h [slot=stacktrace].sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default [slot=stacktrace].sc-stencila-code-error-default{background-color:#fff;background-color:var(--color-stock,#fff);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#4a4a4a;color:var(--color-key,#4a4a4a);margin:0}[kind=warning].sc-stencila-code-error-default-h,stencila-code-error[kind=warning].sc-stencila-code-error-default{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#674c15;color:var(--color-warn-800,#674c15)}[kind=warning].sc-stencila-code-error-default-h [slot=stacktrace].sc-stencila-code-error-default,stencila-code-error[kind=warning].sc-stencila-code-error-default [slot=stacktrace].sc-stencila-code-error-default{border-color:#dca435;border-color:var(--color-warn-500,#dca435)}[kind=error].sc-stencila-code-error-default-h,stencila-code-error[kind=error].sc-stencila-code-error-default{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0);border-color:#cf445e;border-color:var(--color-danger-500,#cf445e);color:#b02d4a;color:var(--color-danger-600,#b02d4a)}[kind=error].sc-stencila-code-error-default-h [slot=stacktrace].sc-stencila-code-error-default,stencila-code-error[kind=error].sc-stencila-code-error-default [slot=stacktrace].sc-stencila-code-error-default{border-color:#cf445e;border-color:var(--color-danger-500,#cf445e)}";

const materialErrorCss = ".sc-stencila-code-error-material-h,stencila-code-error.sc-stencila-code-error-material{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);border:1px solid #6e7591;border-color:var(--color-neutral-500,#6e7591);border-radius:.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;color:#444a5e;color:var(--color-neutral-700,#444a5e);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);max-width:100%;padding:.5rem;position:relative;width:100%}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material{padding-right:1rem}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material *.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material *.sc-stencila-code-error-material{vertical-align:middle}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material stencila-icon.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material stencila-icon.sc-stencila-code-error-material{margin-right:.5rem}.sc-stencila-code-error-material-h stencila-details.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material stencila-details.sc-stencila-code-error-material{--disclosure-icon-right:0.5rem;--disclosure-icon-top:0.5rem;display:block;position:static}.sc-stencila-code-error-material-h [slot=stacktrace].sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material [slot=stacktrace].sc-stencila-code-error-material{background-color:#fff;background-color:var(--color-stock,#fff);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#4a4a4a;color:var(--color-key,#4a4a4a);margin:0}[kind=warning].sc-stencila-code-error-material-h,stencila-code-error[kind=warning].sc-stencila-code-error-material{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#674c15;color:var(--color-warn-800,#674c15)}[kind=warning].sc-stencila-code-error-material-h [slot=stacktrace].sc-stencila-code-error-material,stencila-code-error[kind=warning].sc-stencila-code-error-material [slot=stacktrace].sc-stencila-code-error-material{border-color:#dca435;border-color:var(--color-warn-500,#dca435)}[kind=error].sc-stencila-code-error-material-h,stencila-code-error[kind=error].sc-stencila-code-error-material{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0);border-color:#cf445e;border-color:var(--color-danger-500,#cf445e);color:#b02d4a;color:var(--color-danger-600,#b02d4a)}[kind=error].sc-stencila-code-error-material-h [slot=stacktrace].sc-stencila-code-error-material,stencila-code-error[kind=error].sc-stencila-code-error-material [slot=stacktrace].sc-stencila-code-error-material{border-color:#cf445e;border-color:var(--color-danger-500,#cf445e)}";

const ErrorComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The severity of the error message
     */
    this.kind = 'info';
    this.stackIsOpen = false;
    this.hasStack = false;
    this.toggleStackVisibility = (e) => {
      e.preventDefault();
      this.stackIsOpen = !this.stackIsOpen;
    };
  }
  getIcon(severity) {
    switch (severity) {
      case 'error':
        return 'forbid';
      case 'warning':
        return 'error-warning';
      default:
        return 'information';
    }
  }
  getLevel(kind) {
    switch (kind) {
      case 'error':
      case 'incapable':
        return 'error';
      case 'warning':
      case 'warn':
        return 'warning';
      default:
        return 'info';
    }
  }
  componentWillLoad() {
    var _a;
    this.hasStack = !!((_a = this.el) === null || _a === void 0 ? void 0 : _a.querySelector('[slot="stacktrace"]'));
  }
  render() {
    var _a, _b;
    const severity = this.getLevel((_b = (_a = this.error) === null || _a === void 0 ? void 0 : _a.errorType) !== null && _b !== void 0 ? _b : this.kind);
    return (index.h(index.Host, { kind: severity }, index.h("div", { class: "overview", onClick: this.toggleStackVisibility }, index.h("stencila-icon", { icon: this.getIcon(severity) }), index.h("slot", null)), this.hasStack && (index.h("stencila-details", { open: this.stackIsOpen }, index.h("slot", { name: "stacktrace" })))));
  }
  get el() { return index.getElement(this); }
};
ErrorComponent.style = {
  default: defaultErrorCss,
  material: materialErrorCss
};

exports.stencila_code_error = ErrorComponent;
