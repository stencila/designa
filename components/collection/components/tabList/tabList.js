import { Component, h, Prop, State } from '@stencil/core';
import { ord, number } from 'fp-ts';
export class TabList {
  constructor() {
    this.activeTabIndex = 0;
    this.onKeyboardNavigateTabs = (e) => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      const constrain = ord.clamp(number.Ord)(0, this.tabs.length - 1);
      this.selectTab(constrain(this.activeTabIndex + dir));
    };
    this.clickHandler = (tab, index) => (e) => {
      var _a;
      e.preventDefault();
      this.selectTab(index);
      (_a = tab.onClick) === null || _a === void 0 ? void 0 : _a.call(tab, e);
    };
  }
  selectTab(index) {
    this.activeTabIndex = index;
  }
  render() {
    return (h("ul", { role: "tablist", onKeyDown: this.onKeyboardNavigateTabs }, this.tabs.map((tab, index) => {
      return (h("stencila-tab", { isSelected: tab.isSelected === true ||
          (tab.isSelected === undefined && index === this.activeTabIndex), label: tab.label, onClick: this.clickHandler(tab, index), tabIndex: index === this.activeTabIndex ? 0 : -1 }));
    })));
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
//# sourceMappingURL=tabList.js.map