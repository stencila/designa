import { Component, Element, h, Host, Prop } from '@stencil/core';
import { getSlotByName } from '../utils/slotSelectors';
import { ToastTypes } from './toastController';
/*
 * Individual Toast component.
 * To present on the page see `./toastController.ts`
 */
export class StencilaToast {
  constructor() {
    /**
     * If true, shows a "close" button to immediately dismiss the toast.
     * Note that this prop has no effect if `duration` is set to zero, in which case
     * the toast will always show the "close" button.
     */
    this.dismissable = false;
    /**
     * Duration in milliseconds for how long the toast should be display
     * Setting `duration` to `0` will disable auto-dismissal of the toast.
     */
    this.duration = 4000;
    /**
     * Type of the toast to show. Affects the component colour scheme.
     */
    this.type = ToastTypes.neutral;
    this.getIconByType = () => {
      switch (this.type) {
        case 'success': {
          return 'checkbox-circle';
        }
        case 'danger': {
          return 'forbid';
        }
        case 'warn': {
          return 'error-warning';
        }
        case 'neutral':
        default: {
          return 'question';
        }
      }
    };
    this.dismiss = () => {
      var _a, _b;
      window.clearTimeout(this.timeout);
      (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(this.el);
    };
    this.pauseAutoDismiss = () => {
      window.clearTimeout(this.timeout);
    };
    this.autoDismiss = () => {
      if (this.duration !== undefined && this.duration <= 0) {
        return;
      }
      window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(() => {
        this.dismiss();
      }, this.duration);
    };
    this.styleActionButtons = () => {
      var _a;
      const buttons = Array.from((_a = getSlotByName(this.el)('actions')) !== null && _a !== void 0 ? _a : [])
        .reduce((actions, el) => [...actions, ...Array.from(el.children)], [])
        .filter((el) => el.tagName.toLowerCase() === 'stencila-button' &&
        !el.classList.contains('closeButton'));
      buttons.forEach((el, idx) => {
        el.setAttribute('size', 'xsmall');
        if (idx === 0) {
          el.setAttribute('color', this.type);
        }
        if (idx > 0) {
          el.setAttribute('color', 'neutral');
          el.setAttribute('minimal', 'minimal');
        }
      });
    };
  }
  componentWillLoad() {
    this.styleActionButtons();
  }
  componentDidLoad() {
    this.autoDismiss();
  }
  render() {
    return (h(Host, { type: this.type, position: this.position, dismissable: this.dismissable === true || this.duration === 0, onMouseEnter: this.pauseAutoDismiss, onMouseLeave: this.autoDismiss },
      h("div", { class: "toastAccent" },
        h("stencila-icon", { icon: this.getIconByType(), iconStyle: "fill" })),
      h("div", { class: "content" },
        h("slot", { name: "title" }),
        h("slot", null),
        h("slot", { name: "actions" })),
      (this.dismissable === true || this.duration === 0) && (h("stencila-button", { color: "neutral", iconOnly: true, icon: "close", minimal: true, size: "small", onClick: this.dismiss, class: "closeButton" }))));
  }
  static get is() { return "stencila-toast"; }
  static get originalStyleUrls() { return {
    "default": ["toast.css"],
    "material": ["toast.css"]
  }; }
  static get styleUrls() { return {
    "default": ["toast.css"],
    "material": ["toast.css"]
  }; }
  static get properties() { return {
    "dismissable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean | undefined",
        "resolved": "boolean | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "If true, shows a \"close\" button to immediately dismiss the toast.\nNote that this prop has no effect if `duration` is set to zero, in which case\nthe toast will always show the \"close\" button."
      },
      "attribute": "dismissable",
      "reflect": false,
      "defaultValue": "false"
    },
    "duration": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number | undefined",
        "resolved": "number | undefined",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Duration in milliseconds for how long the toast should be display\nSetting `duration` to `0` will disable auto-dismissal of the toast."
      },
      "attribute": "duration",
      "reflect": false,
      "defaultValue": "4_000"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ToastType",
        "resolved": "\"danger\" | \"neutral\" | \"success\" | \"warn\"",
        "references": {
          "ToastType": {
            "location": "import",
            "path": "./toastController"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Type of the toast to show. Affects the component colour scheme."
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "ToastTypes.neutral"
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ToastPosition | undefined",
        "resolved": "\"bottomCenter\" | \"bottomEnd\" | \"bottomStart\" | \"topCenter\" | \"topEnd\" | \"topStart\" | undefined",
        "references": {
          "ToastPosition": {
            "location": "import",
            "path": "./toastController"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance."
      },
      "attribute": "position",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=toast.js.map