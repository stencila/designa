import { Component, h, Prop, State } from '@stencil/core';
import { ord } from 'fp-ts';
export class TabList {
  constructor() {
    this.activeTabIndex = 0;
    this.onKeyboardNavigateTabs = (e) => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      const constrain = ord.clamp(ord.ordNumber)(0, this.tabs.length - 1);
      this.selectTab(constrain(this.activeTabIndex + dir));
    };
  }
  selectTab(index) {
    this.activeTabIndex = index;
  }
  render() {
    return (h("ul", { role: "tablist", onKeyDown: this.onKeyboardNavigateTabs }, this.tabs.map((tab, index) => (h("stencila-tab", { isSelected: tab.isSelected === true ||
        (tab.isSelected === undefined && index === this.activeTabIndex), label: tab.label, onClick: e => {
        e.preventDefault();
        this.selectTab(index);
        tab.onClick && tab.onClick(e);
      }, tabIndex: index === this.activeTabIndex ? 0 : -1 })))));
  }
  static get is() { return "stencila-tab-list"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["tabList.css"],
    "material": ["tabList.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["tabList.css"],
    "material": ["tabList.material.css"]
  }; }
  static get properties() { return {
    "tabs": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "ChildTab[]",
        "resolved": "ChildTab[]",
        "references": {
          "ChildTab": {
            "location": "local"
          }
        }
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "A list of string values to use as tab labels"
      }
    }
  }; }
  static get states() { return {
    "activeTabIndex": {}
  }; }
}
TabList.elementName = 'stencila-tab-list';
