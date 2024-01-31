'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const slotSelectors = require('./slotSelectors-a6d0c34c.js');

const defaultErrorCss = ".sc-stencila-code-error-default-h,stencila-code-error.sc-stencila-code-error-default{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);border:1px solid #6e7591;border-color:var(--color-neutral-500,#6e7591);border-radius:.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;color:#444a5e;color:var(--color-neutral-700,#444a5e);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);max-width:100%;padding:.5rem;position:relative;width:100%}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default{padding-right:1rem}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default .stacktrace-icon.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default .stacktrace-icon.sc-stencila-code-error-default{cursor:pointer;float:right}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default .stacktrace-icon.hide.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default .stacktrace-icon.hide.sc-stencila-code-error-default{display:none}.sc-stencila-code-error-default-h .overview.sc-stencila-code-error-default *.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default .overview.sc-stencila-code-error-default *.sc-stencila-code-error-default{vertical-align:middle}.sc-stencila-code-error-default-h .sc-stencila-code-error-default-s>[slot=type],.sc-stencila-code-error-default-h [slot=type].sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default-s>[slot=type],stencila-code-error .sc-stencila-code-error-default-s>[slot=type],stencila-code-error.sc-stencila-code-error-default [slot=type].sc-stencila-code-error-default{border-radius:.25rem;border-style:solid;border-width:1px;margin-right:.5rem;padding:0 .125rem}.sc-stencila-code-error-default-h stencila-details.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default stencila-details.sc-stencila-code-error-default{--disclosure-icon-right:0.5rem;--disclosure-icon-top:0.5rem;display:block;position:static;white-space:pre}.sc-stencila-code-error-default-h stencila-details.hide.sc-stencila-code-error-default,stencila-code-error.sc-stencila-code-error-default stencila-details.hide.sc-stencila-code-error-default{display:none}[level=info].sc-stencila-code-error-default-h,stencila-code-error[level=info].sc-stencila-code-error-default{background-color:#ebecff;background-color:var(--color-info-50,#ebecff);border-color:#2069f2;border-color:var(--color-info-500,#2069f2);color:#132f71;color:var(--color-info-800,#132f71)}.sc-stencila-code-error-default-h[level=info] .sc-stencila-code-error-default-s>[slot=type],[level=info].sc-stencila-code-error-default-h [slot=type].sc-stencila-code-error-default,stencila-code-error[level=info].sc-stencila-code-error-default-s>[slot=type],stencila-code-error[level=info] .sc-stencila-code-error-default-s>[slot=type],stencila-code-error[level=info].sc-stencila-code-error-default [slot=type].sc-stencila-code-error-default{background-color:#cacfff;background-color:var(--color-info-100,#cacfff);border-color:#2069f2;border-color:var(--color-info-500,#2069f2);color:#132f71;color:var(--color-info-800,#132f71)}[level=warn].sc-stencila-code-error-default-h,stencila-code-error[level=warn].sc-stencila-code-error-default{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#674c15;color:var(--color-warn-800,#674c15)}.sc-stencila-code-error-default-h[level=warn] .sc-stencila-code-error-default-s>[slot=type],[level=warn].sc-stencila-code-error-default-h [slot=type].sc-stencila-code-error-default,stencila-code-error[level=warn].sc-stencila-code-error-default-s>[slot=type],stencila-code-error[level=warn] .sc-stencila-code-error-default-s>[slot=type],stencila-code-error[level=warn].sc-stencila-code-error-default [slot=type].sc-stencila-code-error-default{background-color:#ffeaaa;background-color:var(--color-warn-100,#ffeaaa);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#674c15;color:var(--color-warn-800,#674c15)}[level=error].sc-stencila-code-error-default-h,stencila-code-error[level=error].sc-stencila-code-error-default{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0);border-color:#cf445e;border-color:var(--color-danger-500,#cf445e);color:#b02d4a;color:var(--color-danger-600,#b02d4a)}.sc-stencila-code-error-default-h[level=error] .sc-stencila-code-error-default-s>[slot=type],[level=error].sc-stencila-code-error-default-h [slot=type].sc-stencila-code-error-default,stencila-code-error[level=error].sc-stencila-code-error-default-s>[slot=type],stencila-code-error[level=error] .sc-stencila-code-error-default-s>[slot=type],stencila-code-error[level=error].sc-stencila-code-error-default [slot=type].sc-stencila-code-error-default{background-color:#ffcace;background-color:var(--color-danger-100,#ffcace);border-color:#cf445e;border-color:var(--color-danger-500,#cf445e);color:#b02d4a;color:var(--color-danger-600,#b02d4a)}";

const materialErrorCss = ".sc-stencila-code-error-material-h,stencila-code-error.sc-stencila-code-error-material{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);border:1px solid #6e7591;border-color:var(--color-neutral-500,#6e7591);border-radius:.25rem;-webkit-box-sizing:border-box;box-sizing:border-box;color:#444a5e;color:var(--color-neutral-700,#444a5e);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);max-width:100%;padding:.5rem;position:relative;width:100%}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material{padding-right:1rem}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material .stacktrace-icon.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material .stacktrace-icon.sc-stencila-code-error-material{cursor:pointer;float:right}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material .stacktrace-icon.hide.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material .stacktrace-icon.hide.sc-stencila-code-error-material{display:none}.sc-stencila-code-error-material-h .overview.sc-stencila-code-error-material *.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material .overview.sc-stencila-code-error-material *.sc-stencila-code-error-material{vertical-align:middle}.sc-stencila-code-error-material-h .sc-stencila-code-error-material-s>[slot=type],.sc-stencila-code-error-material-h [slot=type].sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material-s>[slot=type],stencila-code-error .sc-stencila-code-error-material-s>[slot=type],stencila-code-error.sc-stencila-code-error-material [slot=type].sc-stencila-code-error-material{border-radius:.25rem;border-style:solid;border-width:1px;margin-right:.5rem;padding:0 .125rem}.sc-stencila-code-error-material-h stencila-details.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material stencila-details.sc-stencila-code-error-material{--disclosure-icon-right:0.5rem;--disclosure-icon-top:0.5rem;display:block;position:static;white-space:pre}.sc-stencila-code-error-material-h stencila-details.hide.sc-stencila-code-error-material,stencila-code-error.sc-stencila-code-error-material stencila-details.hide.sc-stencila-code-error-material{display:none}[level=info].sc-stencila-code-error-material-h,stencila-code-error[level=info].sc-stencila-code-error-material{background-color:#ebecff;background-color:var(--color-info-50,#ebecff);border-color:#2069f2;border-color:var(--color-info-500,#2069f2);color:#132f71;color:var(--color-info-800,#132f71)}.sc-stencila-code-error-material-h[level=info] .sc-stencila-code-error-material-s>[slot=type],[level=info].sc-stencila-code-error-material-h [slot=type].sc-stencila-code-error-material,stencila-code-error[level=info].sc-stencila-code-error-material-s>[slot=type],stencila-code-error[level=info] .sc-stencila-code-error-material-s>[slot=type],stencila-code-error[level=info].sc-stencila-code-error-material [slot=type].sc-stencila-code-error-material{background-color:#cacfff;background-color:var(--color-info-100,#cacfff);border-color:#2069f2;border-color:var(--color-info-500,#2069f2);color:#132f71;color:var(--color-info-800,#132f71)}[level=warn].sc-stencila-code-error-material-h,stencila-code-error[level=warn].sc-stencila-code-error-material{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#674c15;color:var(--color-warn-800,#674c15)}.sc-stencila-code-error-material-h[level=warn] .sc-stencila-code-error-material-s>[slot=type],[level=warn].sc-stencila-code-error-material-h [slot=type].sc-stencila-code-error-material,stencila-code-error[level=warn].sc-stencila-code-error-material-s>[slot=type],stencila-code-error[level=warn] .sc-stencila-code-error-material-s>[slot=type],stencila-code-error[level=warn].sc-stencila-code-error-material [slot=type].sc-stencila-code-error-material{background-color:#ffeaaa;background-color:var(--color-warn-100,#ffeaaa);border-color:#dca435;border-color:var(--color-warn-500,#dca435);color:#674c15;color:var(--color-warn-800,#674c15)}[level=error].sc-stencila-code-error-material-h,stencila-code-error[level=error].sc-stencila-code-error-material{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0);border-color:#cf445e;border-color:var(--color-danger-500,#cf445e);color:#b02d4a;color:var(--color-danger-600,#b02d4a)}.sc-stencila-code-error-material-h[level=error] .sc-stencila-code-error-material-s>[slot=type],[level=error].sc-stencila-code-error-material-h [slot=type].sc-stencila-code-error-material,stencila-code-error[level=error].sc-stencila-code-error-material-s>[slot=type],stencila-code-error[level=error] .sc-stencila-code-error-material-s>[slot=type],stencila-code-error[level=error].sc-stencila-code-error-material [slot=type].sc-stencila-code-error-material{background-color:#ffcace;background-color:var(--color-danger-100,#ffcace);border-color:#cf445e;border-color:var(--color-danger-500,#cf445e);color:#b02d4a;color:var(--color-danger-600,#b02d4a)}";

const CodeErrorComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Flag for whether there is a stack trace
     */
    this.hasStackTrace = false;
    /**
     * Toggle for visibility of the stack trace
     */
    this.stackTraceIsOpen = false;
    this.toggleStackTraceIsOpen = (e) => {
      e.preventDefault();
      this.stackTraceIsOpen = !this.stackTraceIsOpen;
    };
  }
  /**
   * Update the level, if not defined, based on the content of the `type` slot
   *
   * In the future, `CodeError` is likely to be replace with `CodeNotification` (or similar)
   * and `level` will be a property (so it does not need to be derived here)
   */
  updateLevel() {
    var _a, _b;
    if (this.level !== undefined) {
      return;
    }
    const errorType = (_b = (_a = slotSelectors.getSlotByName(this.el)('type')[0]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.toLowerCase();
    if (typeof errorType === 'string' && errorType !== '') {
      this.level = errorType.includes('info')
        ? 'info'
        : errorType.includes('warn')
          ? 'warn'
          : 'error';
    }
    else {
      this.level = 'error';
    }
  }
  /**
   * Determine if the `stacktrace` slot has content
   */
  updateHasStackTrace() {
    var _a;
    const stackTrace = (_a = slotSelectors.getSlotByName(this.el)('stacktrace')[0]) === null || _a === void 0 ? void 0 : _a.textContent;
    this.hasStackTrace = typeof stackTrace === 'string' && stackTrace !== '';
  }
  componentWillLoad() {
    this.updateLevel();
    this.updateHasStackTrace();
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "overview", onClick: this.toggleStackTraceIsOpen }, index.h("slot", { name: "type" }), index.h("slot", { name: "message" }), index.h("stencila-icon", { icon: "stack", class: `stacktrace-icon ${this.hasStackTrace ? '' : 'hide'}` })), index.h("stencila-details", { open: this.stackTraceIsOpen, class: `stacktrace-details ${this.hasStackTrace ? '' : 'hide'}` }, index.h("slot", { name: "stacktrace" }))));
  }
  get el() { return index.getElement(this); }
};
CodeErrorComponent.style = {
  default: defaultErrorCss,
  material: materialErrorCss
};

exports.stencila_code_error = CodeErrorComponent;

//# sourceMappingURL=stencila-code-error.cjs.entry.js.map