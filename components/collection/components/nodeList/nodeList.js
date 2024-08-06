import { Component, Element, h, Host, State } from '@stencil/core';
import { getSlotByName } from '../utils/slotSelectors';
/**
 * @slot default - A list or collection of elements to render. If empty, a message stating "No output to show" will be rendered instead.
 */
export class OutputsList {
  constructor() {
    this.emptyOutputMessage = 'No output to show';
    this.isEmpty = true;
    this.checkIfEmpty = () => {
      const slotted = getSlotByName(this.el)(['default', 'outputs']);
      if (slotted.length === 0) {
        this.isEmpty = true;
      }
      else {
        this.isEmpty = slotted.every((el) => {
          var _a;
          const content = (_a = el.innerHTML) === null || _a === void 0 ? void 0 : _a.trim();
          return content === '' || content === this.emptyOutputMessage;
        });
      }
    };
    this.childObserver = new MutationObserver(this.checkIfEmpty);
  }
  componentWillLoad() {
    this.checkIfEmpty();
    this.childObserver.observe(this.el, {
      childList: true,
      subtree: true,
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.childObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
  }
  render() {
    return (h(Host, null,
      h("slot", null),
      h("em", { class: { hidden: !this.isEmpty, emptyContentMessage: true } }, this.emptyOutputMessage)));
  }
  static get is() { return "stencila-node-list"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["nodeList.css"],
    "material": ["nodeList.css"]
  }; }
  static get styleUrls() { return {
    "default": ["nodeList.css"],
    "material": ["nodeList.css"]
  }; }
  static get states() { return {
    "isEmpty": {}
  }; }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=nodeList.js.map