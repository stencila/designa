import { Component, h, Host, Prop } from '@stencil/core';
export class Button {
  constructor() {
    /**
     * The color of the button
     */
    this.color = 'primary';
    /**
     * The overall size of the Button.
     */
    this.size = 'default';
    /**
     * Renders the button without initial background color or border.
     */
    this.minimal = false;
    /**
     * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
     */
    this.isSecondary = false;
    /**
     * If true, prevents the user from interacting with the button.
     * Note: Not all browser prevent the click handler from firing on disabled buttons.
     */
    this.disabled = false;
    /**
     * If true, removes extra padding from Icon inside the button
     * TODO: See if we can automatically infer removal of padding through CSS
     */
    this.iconOnly = false;
    /**
     * If true, shows a loading spinner icon and sets a `disabled` attribute on the button.
     * Note: Not all browser prevent the click handler from firing on disabled buttons.
     */
    this.isLoading = false;
    /**
     * If true, the button will take up the full width of the parent container
     */
    this.fill = false;
    this.generateButton = () => {
      var _a;
      const TagType = this.href === undefined ? 'button' : 'a';
      const elAttrs = TagType === 'button'
        ? { type: this.buttonType }
        : { href: this.href, rel: this.rel, target: this.target };
      const extraAttrs = {};
      if (this.dataEl !== undefined) {
        extraAttrs['data-el'] = this.dataEl;
      }
      return (h(TagType, Object.assign({ class: {
          button: this.href !== undefined,
          fill: this.fill,
          iconOnly: this.iconOnly,
          minimal: this.minimal,
          secondary: this.isSecondary,
          [this.size]: this.size !== undefined,
          [`color-${this.color}`]: true,
        } }, elAttrs, extraAttrs, { disabled: this.isLoading || this.disabled || false, "aria-label": (_a = this.ariaLabel) !== null && _a !== void 0 ? _a : this.tooltip }),
        typeof this.icon === 'string' ? (h("stencila-icon", { icon: this.isLoading ? 'loader-2' : this.icon, class: { spin: this.isLoading } })) : (this.icon),
        h("slot", { name: "icon" }),
        h("span", { class: "label" },
          h("slot", null))));
    };
  }
  render() {
    return (h(Host, { size: this.size, icon: this.icon }, this.tooltip === undefined ? (this.generateButton()) : (h("stencila-tooltip", { text: this.tooltip }, this.generateButton()))));
  }
  static get is() { return "stencila-button"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["button.css"],
    "material": ["button.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["button.css"],
    "material": ["button.material.css"]
  }; }
  static get properties() { return {
    "href": {
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
        "text": "If an `href` property is provided, button will be rendered using an `<a>` anchor tag."
      },
      "attribute": "href",
      "reflect": false
    },
    "rel": {
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
        "tags": [{
            "name": "see",
            "text": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel\nOnly applied if `href` prop is also set."
          }],
        "text": "Relationship of the link"
      },
      "attribute": "rel",
      "reflect": false
    },
    "target": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HTMLAnchorElement['target']",
        "resolved": "string | undefined",
        "references": {
          "HTMLAnchorElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Determines where to display the linked URL, options correspond to HTML Anchor `target` attribute.\nOnly applies if the button is an anchor link.\nhttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target"
      },
      "attribute": "target",
      "reflect": false
    },
    "ariaLabel": {
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
        "text": "Screen-reader accessible label to read out."
      },
      "attribute": "aria-label",
      "reflect": false
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Colors",
        "resolved": "ThemeColorNames | \"warn-50\" | \"warn-100\" | \"warn-200\" | \"warn-300\" | \"warn-400\" | \"warn-500\" | \"warn-600\" | \"warn-700\" | \"warn-800\" | \"warn-900\" | \"brand-50\" | \"brand-100\" | \"brand-200\" | \"brand-300\" | \"brand-400\" | \"brand-500\" | \"brand-600\" | \"brand-700\" | \"brand-800\" | \"brand-900\" | \"danger-50\" | \"danger-100\" | \"danger-200\" | \"danger-300\" | \"danger-400\" | \"danger-500\" | \"danger-600\" | \"danger-700\" | \"danger-800\" | \"danger-900\" | \"key-50\" | \"key-100\" | \"key-200\" | \"key-300\" | \"key-400\" | \"key-500\" | \"key-600\" | \"key-700\" | \"key-800\" | \"key-900\" | \"neutral-50\" | \"neutral-100\" | \"neutral-200\" | \"neutral-300\" | \"neutral-400\" | \"neutral-500\" | \"neutral-600\" | \"neutral-700\" | \"neutral-800\" | \"neutral-900\" | \"primary-50\" | \"primary-100\" | \"primary-200\" | \"primary-300\" | \"primary-400\" | \"primary-500\" | \"primary-600\" | \"primary-700\" | \"primary-800\" | \"primary-900\" | \"stock-50\" | \"stock-100\" | \"stock-200\" | \"stock-300\" | \"stock-400\" | \"stock-500\" | \"stock-600\" | \"stock-700\" | \"stock-800\" | \"stock-900\" | \"success-50\" | \"success-100\" | \"success-200\" | \"success-300\" | \"success-400\" | \"success-500\" | \"success-600\" | \"success-700\" | \"success-800\" | \"success-900\"",
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
        "text": "The color of the button"
      },
      "attribute": "color",
      "reflect": false,
      "defaultValue": "'primary'"
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
        "text": "The overall size of the Button."
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'default'"
    },
    "minimal": {
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
        "text": "Renders the button without initial background color or border."
      },
      "attribute": "minimal",
      "reflect": false,
      "defaultValue": "false"
    },
    "isSecondary": {
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
        "text": "Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet."
      },
      "attribute": "is-secondary",
      "reflect": false,
      "defaultValue": "false"
    },
    "buttonType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'button' | 'submit' | 'reset'",
        "resolved": "\"button\" | \"reset\" | \"submit\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The type of button to render, options correspond to HTML Button `type` attribute.\nhttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/button\nOnly applies if the button is not an anchor link."
      },
      "attribute": "button-type",
      "reflect": false
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
        "text": "If true, prevents the user from interacting with the button.\nNote: Not all browser prevent the click handler from firing on disabled buttons."
      },
      "attribute": "disabled",
      "reflect": false,
      "defaultValue": "false"
    },
    "icon": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "HTMLElement | IconNames",
        "resolved": "HTMLElement | IconNames | undefined",
        "references": {
          "HTMLElement": {
            "location": "global"
          },
          "IconNames": {
            "location": "import",
            "path": "../icon/iconNames"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [{
            "name": "see",
            "text": "Icon component for possible values"
          }],
        "text": "Name of the icon to render inside the button"
      },
      "attribute": "icon",
      "reflect": false
    },
    "iconOnly": {
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
        "text": "If true, removes extra padding from Icon inside the button\nTODO: See if we can automatically infer removal of padding through CSS"
      },
      "attribute": "icon-only",
      "reflect": false,
      "defaultValue": "false"
    },
    "isLoading": {
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
        "text": "If true, shows a loading spinner icon and sets a `disabled` attribute on the button.\nNote: Not all browser prevent the click handler from firing on disabled buttons."
      },
      "attribute": "is-loading",
      "reflect": false,
      "defaultValue": "false"
    },
    "fill": {
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
        "text": "If true, the button will take up the full width of the parent container"
      },
      "attribute": "fill",
      "reflect": false,
      "defaultValue": "false"
    },
    "tooltip": {
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
        "text": "An optional help text to display for button focus and hover states."
      },
      "attribute": "tooltip",
      "reflect": false
    },
    "dataEl": {
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
        "text": "An optional data attribute set on the button element for easier targeting using JavaScript."
      },
      "attribute": "data-el",
      "reflect": false
    }
  }; }
}
//# sourceMappingURL=button.js.map