'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');

// TODO: curry in v3
/**
 * Take the minimum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
var min = function (O) { return function (first, second) {
    return first === second || O.compare(first, second) < 1 ? first : second;
}; };
// TODO: curry in v3
/**
 * Take the maximum of two values. If they are considered equal, the first argument is chosen
 *
 * @since 2.0.0
 */
var max = function (O) { return function (first, second) {
    return first === second || O.compare(first, second) > -1 ? first : second;
}; };
/**
 * Clamp a value between a minimum and a maximum
 *
 * @since 2.0.0
 */
var clamp = function (O) {
    var minO = min(O);
    var maxO = max(O);
    return function (low, hi) { return function (a) { return maxO(minO(a, hi), low); }; };
};

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------
/**
 * @category instances
 * @since 2.10.0
 */
var Eq = {
    equals: function (first, second) { return first === second; }
};
/**
 * @category instances
 * @since 2.10.0
 */
var Ord = {
    equals: Eq.equals,
    compare: function (first, second) { return (first < second ? -1 : first > second ? 1 : 0); }
};

const defaultTabListCss = "stencila-tab-list.sc-stencila-tab-list-default{display:block}.sc-stencila-tab-list-default-h ul.sc-stencila-tab-list-default,stencila-tab-list.sc-stencila-tab-list-default ul.sc-stencila-tab-list-default,ul[role=tablist].sc-stencila-tab-list-default{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0}";

const tabListMaterialCss = "stencila-tab-list.sc-stencila-tab-list-material{display:block}.sc-stencila-tab-list-material-h ul.sc-stencila-tab-list-material,ul[role=tablist].sc-stencila-tab-list-material{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0}";

const TabList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.activeTabIndex = 0;
    this.onKeyboardNavigateTabs = (e) => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      const constrain = clamp(Ord)(0, this.tabs.length - 1);
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
    return (index.h("ul", { role: "tablist", onKeyDown: this.onKeyboardNavigateTabs }, this.tabs.map((tab, index$1) => {
      return (index.h("stencila-tab", { isSelected: tab.isSelected === true ||
          (tab.isSelected === undefined && index$1 === this.activeTabIndex), label: tab.label, onClick: this.clickHandler(tab, index$1), tabIndex: index$1 === this.activeTabIndex ? 0 : -1 }));
    })));
  }
};
TabList.style = {
  default: defaultTabListCss,
  material: tabListMaterialCss
};

exports.stencila_tab_list = TabList;

//# sourceMappingURL=stencila-tab-list.cjs.entry.js.map