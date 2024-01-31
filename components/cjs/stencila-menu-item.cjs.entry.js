'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');

const defaultMenuItemCss = ".sc-stencila-menu-item-default-h,stencila-menu-item.sc-stencila-menu-item-default{-ms-flex-align:center;align-items:center;color:#4a4a4a;color:var(--color-key,#4a4a4a);cursor:pointer;display:-ms-flexbox;display:flex;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.875rem;height:2rem;letter-spacing:.025em;line-height:1.25rem;line-height:1;-webkit-text-decoration-line:none;text-decoration-line:none}.sc-stencila-menu-item-default-h:not([aria-disabled]):focus,.sc-stencila-menu-item-default-h:not([aria-disabled]):hover,stencila-menu-item.sc-stencila-menu-item-default:not([aria-disabled]):focus,stencila-menu-item.sc-stencila-menu-item-default:not([aria-disabled]):hover{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}.sc-stencila-menu-item-default-h stencila-icon.sc-stencila-menu-item-default,stencila-menu-item.sc-stencila-menu-item-default stencila-icon.sc-stencila-menu-item-default{margin-right:.5rem}.sc-stencila-menu-item-default-h>li.sc-stencila-menu-item-default,stencila-menu-item.sc-stencila-menu-item-default>li.sc-stencila-menu-item-default{list-style-type:none;margin:0;padding:0 .5rem;white-space:nowrap;width:100%}.sc-stencila-menu-item-default-h>li .sc-stencila-menu-item-default-s>stencila-menu,stencila-menu-item>li.sc-stencila-menu-item-default-s>stencila-menu,stencila-menu-item>li .sc-stencila-menu-item-default-s>stencila-menu{width:100%}[size=xsmall].sc-stencila-menu-item-default-h,stencila-menu-item[size=xsmall].sc-stencila-menu-item-default{font-size:.75rem;height:1.25rem;line-height:1rem}[size=xsmall].sc-stencila-menu-item-default-h stencila-icon.sc-stencila-menu-item-default,stencila-menu-item[size=xsmall].sc-stencila-menu-item-default stencila-icon.sc-stencila-menu-item-default{margin-right:.25rem}[size=sm].sc-stencila-menu-item-default-h,stencila-menu-item[size=sm].sc-stencila-menu-item-default{font-size:1rem;height:1.5rem;line-height:1.5rem}[aria-disabled].sc-stencila-menu-item-default-h,stencila-menu-item[aria-disabled].sc-stencila-menu-item-default{cursor:default}[divider].sc-stencila-menu-item-default-h,stencila-menu-item[divider].sc-stencila-menu-item-default{color:var(--color-neutral-600);font-size:.75rem;font-weight:700;line-height:1rem}";

const menuItemMaterialCss = ".sc-stencila-menu-item-material-h,stencila-menu-item.sc-stencila-menu-item-material{-ms-flex-align:center;align-items:center;color:#4a4a4a;color:var(--color-key,#4a4a4a);cursor:pointer;display:-ms-flexbox;display:flex;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);height:3rem;-webkit-text-decoration-line:none;text-decoration-line:none}.sc-stencila-menu-item-material-h:not([aria-disabled]):focus,.sc-stencila-menu-item-material-h:not([aria-disabled]):hover,stencila-menu-item.sc-stencila-menu-item-material:not([aria-disabled]):focus,stencila-menu-item.sc-stencila-menu-item-material:not([aria-disabled]):hover{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}.sc-stencila-menu-item-material-h stencila-icon.sc-stencila-menu-item-material,stencila-menu-item.sc-stencila-menu-item-material stencila-icon.sc-stencila-menu-item-material{margin-right:.5rem}.sc-stencila-menu-item-material-h>li.sc-stencila-menu-item-material,stencila-menu-item.sc-stencila-menu-item-material>li.sc-stencila-menu-item-material{list-style-type:none;margin:0;padding:0 1rem;white-space:nowrap;width:100%}.sc-stencila-menu-item-material-h>li .sc-stencila-menu-item-material-s>stencila-menu,stencila-menu-item>li.sc-stencila-menu-item-material-s>stencila-menu,stencila-menu-item>li .sc-stencila-menu-item-material-s>stencila-menu{width:100%}[size=xsmall].sc-stencila-menu-item-material-h,stencila-menu-item[size=xsmall].sc-stencila-menu-item-material{font-size:.75rem;height:1.25rem;line-height:1rem}[size=xsmall].sc-stencila-menu-item-material-h stencila-icon.sc-stencila-menu-item-material,stencila-menu-item[size=xsmall].sc-stencila-menu-item-material stencila-icon.sc-stencila-menu-item-material{margin-right:.25rem}[size=sm].sc-stencila-menu-item-material-h,stencila-menu-item[size=sm].sc-stencila-menu-item-material{font-size:1rem;height:1.5rem;line-height:1.5rem}[aria-disabled].sc-stencila-menu-item-material-h,stencila-menu-item[aria-disabled].sc-stencila-menu-item-material{cursor:default}[divider].sc-stencila-menu-item-material-h,stencila-menu-item[divider].sc-stencila-menu-item-material{color:var(--color-neutral-600);font-size:.75rem;font-weight:700;line-height:1rem}";

const MenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The overall size of the component.
     */
    this.size = 'default';
    /**
     * The overall size of the component.
     */
    this.role = 'menuitem';
    /**
     * Determines whether the menu item is enabled/clickable or not
     */
    this.disabled = false;
    /**
     * Renders the menu item as a section divider.
     * It does not have any click or hover handlers
     */
    this.divider = false;
  }
  render() {
    var _a;
    const ariaAttrs = {
      'aria-disabled': this.disabled || this.divider,
      role: this.role,
    };
    return (index.h(index.Host, Object.assign({}, ariaAttrs, { size: this.size }), ((_a = this.el) === null || _a === void 0 ? void 0 : _a.slot) === 'toggle' ? (index.h(index.Fragment, null, this.icon !== undefined && (index.h("stencila-icon", { icon: this.icon })), index.h("slot", null))) : (index.h("li", null, this.icon !== undefined && (index.h("stencila-icon", { icon: this.icon })), index.h("slot", null)))));
  }
  get el() { return index.getElement(this); }
};
MenuItem.style = {
  default: defaultMenuItemCss,
  material: menuItemMaterialCss
};

exports.stencila_menu_item = MenuItem;

//# sourceMappingURL=stencila-menu-item.cjs.entry.js.map