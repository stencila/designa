import { Component, Element, h, Host, Prop, State } from '@stencil/core';
export class ErrorComponent {
  constructor() {
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
    return (h(Host, { kind: severity },
      h("div", { class: "overview", onClick: this.toggleStackVisibility },
        h("stencila-icon", { icon: this.getIcon(severity) }),
        h("slot", null)),
      this.hasStack && (h("stencila-details", { open: this.stackIsOpen },
        h("slot", { name: "stacktrace" })))));
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
        "resolved": "CodeError | undefined",
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
        "text": "The `CodeError` object"
      }
    },
    "kind": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string | Level",
        "resolved": "string",
        "references": {
          "Level": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The severity of the error message"
      },
      "attribute": "kind",
      "reflect": false,
      "defaultValue": "'info'"
    }
  }; }
  static get states() { return {
    "stackIsOpen": {}
  }; }
  static get elementRef() { return "el"; }
}
