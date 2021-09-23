import { Component, h, Host, Prop } from '@stencil/core';
export class MenuItem {
  render() {
    return (h(Host, { role: "menuitem" },
      this.icon !== undefined && (h("stencila-icon", { icon: this.icon })),
      h("slot", null)));
  }
  static get is() { return "stencila-menu-item"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["menuItem.css"],
    "material": ["menuItem.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["menuItem.css"],
    "material": ["menuItem.material.css"]
  }; }
  static get properties() { return {
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconNames | undefined",
        "resolved": "IconNames | undefined",
        "references": {
          "IconNames": {
            "location": "import",
            "path": "../icon/iconNames"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "icon",
      "reflect": false
    }
  }; }
}
