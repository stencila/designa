import { Component, h, Host, Prop, State } from '@stencil/core';
export class Details {
  constructor() {
    var _a;
    /**
     * Determines whether the contents are visible or not.
     */
    this.open = undefined;
    this.clickHandler = (e) => {
      e.preventDefault();
      // If we have an `open` prop, treat this is a controlled component
      if (this.open !== undefined)
        return;
      this.isOpen = !this.isOpen;
    };
    this.isOpen = (_a = this.open) !== null && _a !== void 0 ? _a : false;
  }
  render() {
    var _a;
    const open = (_a = this.open) !== null && _a !== void 0 ? _a : this.isOpen;
    return (h(Host, { isOpen: open, onClick: this.clickHandler },
      h("slot", { name: "summary" }),
      h("div", { class: { contents: true, hidden: !open } },
        h("slot", null)),
      h("stencila-icon", { icon: "arrow-down-s", class: "disclosure-toggle" })));
  }
  static get is() { return "stencila-details"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["details.css"],
    "material": ["details.css"]
  }; }
  static get styleUrls() { return {
    "default": ["details.css"],
    "material": ["details.css"]
  }; }
  static get properties() { return {
    "open": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Determines whether the contents are visible or not."
      },
      "attribute": "open",
      "reflect": false,
      "defaultValue": "undefined"
    }
  }; }
  static get states() { return {
    "isOpen": {}
  }; }
}
