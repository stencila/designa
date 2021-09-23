'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-77e1ad50.js');

const defaultMenuItemCss = ".sc-stencila-menu-item-default-h{-ms-flex-align:center;align-items:center;color:#4a4a4a;color:var(--color-key,#4a4a4a);cursor:pointer;display:-ms-flexbox;display:flex;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.875rem;height:2rem;letter-spacing:.025em;line-height:1.25rem;line-height:1;padding-left:.5rem;padding-right:.5rem;text-decoration:none;text-transform:uppercase}.sc-stencila-menu-item-default-h:hover{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}.sc-stencila-menu-item-default-h stencila-icon.sc-stencila-menu-item-default{margin-right:.5rem}";

const menuItemMaterialCss = ".sc-stencila-menu-item-material-h{-ms-flex-align:center;align-items:center;color:#4a4a4a;color:var(--color-key,#4a4a4a);cursor:pointer;display:-ms-flexbox;display:flex;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);height:3rem;padding-left:1rem;padding-right:1rem;text-decoration:none}.sc-stencila-menu-item-material-h:hover{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}.sc-stencila-menu-item-material-h stencila-icon.sc-stencila-menu-item-material{margin-right:.5rem}";

const MenuItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { role: "menuitem" }, this.icon !== undefined && (index.h("stencila-icon", { icon: this.icon })), index.h("slot", null)));
  }
};
MenuItem.style = {
  default: defaultMenuItemCss,
  material: menuItemMaterialCss
};

exports.stencila_menu_item = MenuItem;
