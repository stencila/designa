import { Component, Host, h, Prop } from '@stencil/core';
export class Input {
  constructor() {
    /**
     * Automatically bring cursor focus to the input field on render.
     */
    this.autoFocus = false;
    /**
     * Type of input field.
     */
    this.type = 'text';
    /**
     * Visually conceal the input label.
     * Use sparingly for simple forms only with a descriptive action button.
     */
    this.hideLabel = false;
    /**
     * Render the label and input field as inline elements.
     */
    this.inline = false;
    /**
     * When `true` value must be provided before submitting.
     */
    this.required = false;
    /**
     * Text value of the input.
     */
    this.value = '';
  }
  render() {
    var _a;
    const _type = this.type === 'number'
      ? {
        type: 'text',
        inputmode: 'numeric',
        pattern: '[0-9]*',
      }
      : { type: this.type };
    const _label = this.label === undefined || this.hideLabel
      ? {
        'aria-label': (_a = this.label) !== null && _a !== void 0 ? _a : this.name,
      }
      : { 'aria-labelledby': `${this.name}-label` };
    return (h(Host, { class: { inline: this.inline } },
      this.iconStart !== undefined && (h("stencila-icon", { icon: this.iconStart })),
      h("input", Object.assign({}, _type, _label, { autoFocus: this.autoFocus, inputmode: this.inputmode, name: this.name, placeholder: this.placeholder, required: this.required, value: this.value }))));
  }
  static get is() { return "stencila-input"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["input.css"],
    "material": ["input.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["input.css"],
    "material": ["input.material.css"]
  }; }
  static get properties() { return {
    "autoFocus": {
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
        "text": "Automatically bring cursor focus to the input field on render."
      },
      "attribute": "auto-focus",
      "reflect": false,
      "defaultValue": "false"
    },
    "inputmode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| 'text'\n    | 'tel'\n    | 'url'\n    | 'email'\n    | 'numeric'\n    | 'decimal'\n    | 'search'",
        "resolved": "\"decimal\" | \"email\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\" | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "A hint to the browser for which keyboard to display."
      },
      "attribute": "inputmode",
      "reflect": false
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'text' | 'password' | 'number' | 'search'",
        "resolved": "\"number\" | \"password\" | \"search\" | \"text\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of input field."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'text'"
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The name of the input, submitted as the value's label inside the form data."
      },
      "attribute": "name",
      "reflect": false
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Accessible text label for the input field. Defaults to the input's `name` prop."
      },
      "attribute": "label",
      "reflect": false
    },
    "hideLabel": {
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
        "text": "Visually conceal the input label.\nUse sparingly for simple forms only with a descriptive action button."
      },
      "attribute": "hide-label",
      "reflect": false,
      "defaultValue": "false"
    },
    "inline": {
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
        "text": "Render the label and input field as inline elements."
      },
      "attribute": "inline",
      "reflect": false,
      "defaultValue": "false"
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Short hint demonstrating expected input value. Shown when the input is empty."
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "iconStart": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "IconNames",
        "resolved": "IconNames | undefined",
        "references": {
          "IconNames": {
            "location": "import",
            "path": "../icon/iconNames"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Icon to show at the start of the input field."
      },
      "attribute": "icon-start",
      "reflect": false
    },
    "required": {
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
        "text": "When `true` value must be provided before submitting."
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "value": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "number | string",
        "resolved": "number | string | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Text value of the input."
      },
      "attribute": "value",
      "reflect": false,
      "defaultValue": "''"
    }
  }; }
}
