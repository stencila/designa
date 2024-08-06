import { r as registerInstance, h, e as Host } from './index-2305c23c.js';
import { a as ToastPositions } from './toastController-5becfc9e.js';
import './_commonjsHelpers-9943807e.js';

const StencilaToastContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Default position of Toasts on the screen.
     * Can be overridden by individual Toast instances.
     */
    this.position = ToastPositions.topCenter;
  }
  render() {
    return (h(Host, { class: "stencila-toast-container", position: this.position }, h("animate-presence", { "aria-live": "polite", role: "status", "aria-relevant": "additions" }, h("slot", null))));
  }
};

export { StencilaToastContainer as stencila_toast_container };

//# sourceMappingURL=stencila-toast-container.entry.js.map