'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const toastController = require('./toastController-9c269d2d.js');
require('./_commonjsHelpers-537d719a.js');

const StencilaToastContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Default position of Toasts on the screen.
     * Can be overridden by individual Toast instances.
     */
    this.position = toastController.ToastPositions.topCenter;
  }
  render() {
    return (index.h(index.Host, { class: "stencila-toast-container", position: this.position }, index.h("animate-presence", { "aria-live": "polite", role: "status", "aria-relevant": "additions" }, index.h("slot", null))));
  }
};

exports.stencila_toast_container = StencilaToastContainer;

//# sourceMappingURL=stencila-toast-container.cjs.entry.js.map