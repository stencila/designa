import { createPopper } from '@popperjs/core';
import { Component, Element, h, Host, Prop, Watch, } from '@stencil/core';
export class Tooltip {
  constructor() {
    this.popperRef = null;
    this.showTooltip = () => {
      var _a, _b;
      // TODO: Use Schema helpers once package is updated: https://github.com/stencila/schema/issues/178
      const target = (_a = document.querySelector('[data-itemscope="root"]')) !== null && _a !== void 0 ? _a : document.body;
      if (this.tooltipRef === undefined) {
        this.tooltipRef =
          (_b = document.querySelector('stencila-tooltip-element')) !== null && _b !== void 0 ? _b : document.createElement('stencila-tooltip-element');
      }
      this.tooltipRef.innerText = this.text;
      target.appendChild(this.tooltipRef);
      this.popperRef = createPopper(this.el, this.tooltipRef, {
        placement: 'bottom',
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 8],
            },
          },
          {
            name: 'preventOverflow',
          },
        ],
      });
      window.addEventListener('mousemove', this.onMouseMoveHandler);
    };
    this.onMouseMoveHandler = (e) => {
      if (!this.el.contains(e.target)) {
        this.destroyTooltip();
      }
    };
    this.onMouseOutHandler = (e) => {
      if (e.relatedTarget && !this.el.contains(e.relatedTarget)) {
        this.destroyTooltip();
      }
    };
    this.destroyTooltip = () => {
      if (this.tooltipRef) {
        this.tooltipRef.remove();
      }
      if (this.popperRef) {
        this.popperRef.destroy();
        this.popperRef = null;
      }
      window.removeEventListener('mousemove', this.onMouseMoveHandler);
    };
    this.loadComponent = () => {
      this.el.addEventListener('focusin', this.showTooltip);
      this.el.addEventListener('focusout', this.destroyTooltip);
      this.el.addEventListener('mouseenter', this.showTooltip);
      this.el.addEventListener('mouseout', this.onMouseOutHandler);
    };
    this.unloadComponent = () => {
      this.el.removeEventListener('focusin', this.showTooltip);
      this.el.removeEventListener('focusout', this.destroyTooltip);
      this.el.removeEventListener('mouseenter', this.showTooltip);
      this.el.removeEventListener('mouseout', this.onMouseOutHandler);
      window.removeEventListener('mousemove', this.onMouseMoveHandler);
    };
  }
  componentDidLoad() {
    this.loadComponent();
  }
  disconnectedCallback() {
    this.unloadComponent();
    this.destroyTooltip();
  }
  watchHandler(newText) {
    if (this.tooltipRef !== undefined) {
      this.tooltipRef.innerText = newText;
      if (this.popperRef) {
        this.popperRef
          .update()
          .catch((err) => console.log('could not update Tooltip position\n', err));
      }
    }
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "stencila-tooltip"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["tooltip.css"],
    "material": ["tooltip.css"]
  }; }
  static get styleUrls() { return {
    "default": ["tooltip.css"],
    "material": ["tooltip.css"]
  }; }
  static get properties() { return {
    "text": {
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
        "text": "The text content of the Tooltip."
      },
      "attribute": "text",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "text",
      "methodName": "watchHandler"
    }]; }
}
Tooltip.elementName = 'stencila-tooltip';
