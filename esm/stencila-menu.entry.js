import { r as registerInstance, h, H as Host } from './index-364020fb.js';

const defaultMenuCss = ".sc-stencila-menu-default-h ul.sc-stencila-menu-default{--tw-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:inline-block;margin:0;min-width:112px;padding:0;position:absolute;z-index:1}.sc-stencila-menu-default-h ul[aria-hidden].sc-stencila-menu-default{display:none}.sc-stencila-menu-default-h ul.sc-stencila-menu-default-s>:not(:last-child){border:0 solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-bottom:1px solid var(--color-neutral-100,#cfd2e1)}";

const menuMaterialCss = ".sc-stencila-menu-material-h ul.sc-stencila-menu-material{--tw-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:inline-block;margin:0;min-width:112px;padding:0;position:absolute;z-index:1}.sc-stencila-menu-material-h ul[aria-hidden].sc-stencila-menu-material{display:none}";

let menuIds = 0;
const Menu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Determines whether the Menu is shown or not
     */
    this.isOpen = false;
    this.toggleMenu = (e) => {
      e.preventDefault();
      this.isOpen = !this.isOpen;
    };
    this.menuId = `stencila-menu-${menuIds++}`;
  }
  render() {
    return (h(Host, null, h("span", { onClick: this.toggleMenu, "aria-controls": this.menuId }, h("slot", { name: "toggle" })), h("ul", { role: "menu", "aria-hidden": !this.isOpen, "aria-orientation": "vertical", tabindex: "-1", "aria-expanded": "false", id: this.menuId }, h("slot", null))));
  }
};
Menu.style = {
  default: defaultMenuCss,
  material: menuMaterialCss
};

export { Menu as stencila_menu };
