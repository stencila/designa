import { Component, h, Host, Prop } from '@stencil/core';
import { ToastPositions } from '../toast/toastController';
/*
 * Target container for `stencila-toast` elements.
 * Only one `stencila-toast-container` element should be present on the page.
 */
export class StencilaToastContainer {
  constructor() {
    /**
     * Default position of Toasts on the screen.
     * Can be overridden by individual Toast instances.
     */
    this.position = ToastPositions.topCenter;
  }
  render() {
    return (h(Host, { class: "stencila-toast-container", position: this.position },
      h("animate-presence", { "aria-live": "polite", role: "status", "aria-relevant": "additions" },
        h("slot", null))));
  }
  static get is() { return "stencila-toast-container"; }
  static get properties() { return {
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "ToastPosition",
        "resolved": "\"bottomCenter\" | \"bottomEnd\" | \"bottomStart\" | \"topCenter\" | \"topEnd\" | \"topStart\"",
        "references": {
          "ToastPosition": {
            "location": "import",
            "path": "../toast/toastController"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Default position of Toasts on the screen.\nCan be overridden by individual Toast instances."
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "ToastPositions.topCenter"
    }
  }; }
}
//# sourceMappingURL=toastContainer.js.map