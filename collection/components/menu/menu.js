import { Component, h, Host, Prop } from '@stencil/core';
let menuIds = 0;
export class Menu {
  constructor() {
    /**
     * Determines whether the Menu is shown or not
     */
    this.isOpen = false;
    this.toggleMenu = (e) => {
      e.preventDefault();
      this.isOpen = !this.isOpen;
    };
    this.menuId = `stencila-menu-${menuIds++}`;
  }
  render() {
    return (h(Host, null,
      h("span", { onClick: this.toggleMenu, "aria-controls": this.menuId },
        h("slot", { name: "toggle" })),
      h("ul", { role: "menu", "aria-hidden": !this.isOpen, "aria-orientation": "vertical", tabindex: "-1", "aria-expanded": "false", id: this.menuId },
        h("slot", null))));
  }
  static get is() { return "stencila-menu"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["menu.css"],
    "material": ["menu.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["menu.css"],
    "material": ["menu.material.css"]
  }; }
  static get properties() { return {
    "isOpen": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Determines whether the Menu is shown or not"
      },
      "attribute": "is-open",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
