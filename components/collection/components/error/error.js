import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { getSlotByName } from '../utils/slotSelectors';
export class CodeErrorComponent {
  constructor() {
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
    const errorType = (_b = (_a = getSlotByName(this.el)('type')[0]) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.toLowerCase();
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
    const stackTrace = (_a = getSlotByName(this.el)('stacktrace')[0]) === null || _a === void 0 ? void 0 : _a.textContent;
    this.hasStackTrace = typeof stackTrace === 'string' && stackTrace !== '';
  }
  componentWillLoad() {
    this.updateLevel();
    this.updateHasStackTrace();
  }
  render() {
    return (h(Host, null,
      h("div", { class: "overview", onClick: this.toggleStackTraceIsOpen },
        h("slot", { name: "type" }),
        h("slot", { name: "message" }),
        h("stencila-icon", { icon: "stack", class: `stacktrace-icon ${this.hasStackTrace ? '' : 'hide'}` })),
      h("stencila-details", { open: this.stackTraceIsOpen, class: `stacktrace-details ${this.hasStackTrace ? '' : 'hide'}` },
        h("slot", { name: "stacktrace" }))));
  }
  static get is() { return "stencila-code-error"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["error.css"],
    "material": ["error.css"]
  }; }
  static get styleUrls() { return {
    "default": ["error.css"],
    "material": ["error.css"]
  }; }
  static get properties() { return {
    "error": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "CodeError",
        "resolved": "Entity & { type: \"CodeError\"; errorMessage: string; errorType?: string | undefined; stackTrace?: string | undefined; } | undefined",
        "references": {
          "CodeError": {
            "location": "import",
            "path": "@stencila/schema"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The `CodeError` node"
      }
    },
    "level": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "Level",
        "resolved": "\"error\" | \"info\" | \"warn\" | undefined",
        "references": {
          "Level": {
            "location": "local"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The severity of the error message"
      },
      "attribute": "level",
      "reflect": true
    }
  }; }
  static get states() { return {
    "hasStackTrace": {},
    "stackTraceIsOpen": {}
  }; }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=error.js.map