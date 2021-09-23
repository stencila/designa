import { Component, h, Host, Prop } from '@stencil/core';
export class Toolbar {
  constructor() {
    /**
     * When `fixed` the Navbar will remain pinned to the top of the screen.
     * Note that if the Navbar component is not followed by a sibling element,
     * you will have to set `margin-top: 3rem` on the following element yourself.
     */
    this.position = 'static';
  }
  render() {
    return (h(Host, { color: this.color, position: this.position },
      h("div", null,
        h("slot", { name: "start" }),
        h("slot", { name: "middle" }),
        h("slot", { name: "end" }))));
  }
  static get is() { return "stencila-toolbar"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["toolbar.css"],
    "material": ["toolbar.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["toolbar.css"],
    "material": ["toolbar.material.css"]
  }; }
  static get properties() { return {
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'static' | 'fixed'",
        "resolved": "\"fixed\" | \"static\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "When `fixed` the Navbar will remain pinned to the top of the screen.\nNote that if the Navbar component is not followed by a sibling element,\nyou will have to set `margin-top: 3rem` on the following element yourself."
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'static'"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Colors | string",
        "resolved": "string",
        "references": {
          "Colors": {
            "location": "import",
            "path": "../../types"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The background fill color of the Navbar"
      },
      "attribute": "color",
      "reflect": false
    }
  }; }
}
