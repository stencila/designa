import { Element, Component, h, Host, Prop, Fragment } from '@stencil/core';
export class MenuItem {
  constructor() {
    /**
     * The overall size of the component.
     */
    this.size = 'default';
    /**
     * The overall size of the component.
     */
    this.role = 'menuitem';
    /**
     * Determines whether the menu item is enabled/clickable or not
     */
    this.disabled = false;
    /**
     * Renders the menu item as a section divider.
     * It does not have any click or hover handlers
     */
    this.divider = false;
  }
  render() {
    var _a;
    const ariaAttrs = {
      'aria-disabled': this.disabled || this.divider,
      role: this.role,
    };
    return (h(Host, Object.assign({}, ariaAttrs, { size: this.size }), ((_a = this.el) === null || _a === void 0 ? void 0 : _a.slot) === 'toggle' ? (h(Fragment, null,
      this.icon !== undefined && (h("stencila-icon", { icon: this.icon })),
      h("slot", null))) : (h("li", null,
      this.icon !== undefined && (h("stencila-icon", { icon: this.icon })),
      h("slot", null)))));
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
        "tags": [{
            "name": "see",
            "text": "Icon component for possible values"
          }],
        "text": "Name of the icon to show before the label"
      },
      "attribute": "icon",
      "reflect": false
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'xsmall' | 'small' | 'default' | 'large'",
        "resolved": "\"default\" | \"large\" | \"small\" | \"xsmall\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The overall size of the component."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "role": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'menuitem' | 'menuitemradio' | 'menuitemcheckbox'",
        "resolved": "\"menuitem\" | \"menuitemcheckbox\" | \"menuitemradio\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The overall size of the component."
      },
      "attribute": "role",
      "reflect": false,
      "defaultValue": "'menuitem'"
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Determines whether the menu item is enabled/clickable or not"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "divider": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Renders the menu item as a section divider.\nIt does not have any click or hover handlers"
      },
      "attribute": "divider",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=menuItem.js.map