import { Component, h, Prop } from '@stencil/core';
export class Tab {
  constructor() {
    /**
     * The link the tab should navigate to
     */
    this.href = '#';
    /**
     * Indicates whether the current tab is "selected"
     */
    this.isSelected = false;
  }
  render() {
    return (h("li", { role: "presentation" },
      h("a", { "aria-selected": this.isSelected.toString(), href: this.href, role: "tab" }, this.label)));
  }
  static get is() { return "stencila-tab"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["tab.css"],
    "material": ["tab.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["tab.css"],
    "material": ["tab.material.css"]
  }; }
  static get properties() { return {
    "href": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The link the tab should navigate to"
      },
      "attribute": "href",
      "reflect": false,
      "defaultValue": "'#'"
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The displayed text of the Tab"
      },
      "attribute": "label",
      "reflect": false
    },
    "isSelected": {
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
        "text": "Indicates whether the current tab is \"selected\""
      },
      "attribute": "selected",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
Tab.elementName = 'stencila-tab';
