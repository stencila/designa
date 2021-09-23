import { Component, h, Host } from '@stencil/core';
export class TooltipElement {
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "stencila-tooltip-element"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["tooltipElement.css"],
    "material": ["tooltipElement.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["tooltipElement.css"],
    "material": ["tooltipElement.material.css"]
  }; }
}
TooltipElement.elementName = 'stencila-tooltip-element';
