import { r as registerInstance, h } from './index-364020fb.js';

/**
 * @category instances
 * @since 2.5.0
 */
var eqStrict = {
    equals: function (a, b) { return a === b; }
};

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
// default compare for primitive types
function compare(first, second) {
    return first < second ? -1 : first > second ? 1 : 0;
}
var strictOrd = {
    equals: eqStrict.equals,
    compare: compare
};
/**
 * Use [`Ord`](./number.ts.html#ord) instead.
 *
 * @category instances
 * @since 2.0.0
 * @deprecated
 */
var ordNumber = strictOrd;

const defaultTabListCss = "stencila-tab-list.sc-stencila-tab-list-default{display:block}.sc-stencila-tab-list-default-h ul.sc-stencila-tab-list-default,stencila-tab-list.sc-stencila-tab-list-default ul.sc-stencila-tab-list-default,ul[role=tablist].sc-stencila-tab-list-default{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1);display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0}";

const tabListMaterialCss = "stencila-tab-list.sc-stencila-tab-list-material{display:block}.sc-stencila-tab-list-material-h ul.sc-stencila-tab-list-material,ul[role=tablist].sc-stencila-tab-list-material{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin:0;padding:0}";

const TabList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.activeTabIndex = 0;
    this.onKeyboardNavigateTabs = (e) => {
      const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      const constrain = clamp(ordNumber)(0, this.tabs.length - 1);
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
};
TabList.elementName = 'stencila-tab-list';
TabList.style = {
  default: defaultTabListCss,
  material: tabListMaterialCss
};

export { TabList as stencila_tab_list };
