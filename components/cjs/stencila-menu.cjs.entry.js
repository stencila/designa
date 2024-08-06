'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const popper = require('./popper-71bf3058.js');

const defaultMenuCss = ".sc-stencila-menu-default-h,stencila-menu.sc-stencila-menu-default{display:inline-block;position:relative}.sc-stencila-menu-default-h ul.sc-stencila-menu-default,stencila-menu.sc-stencila-menu-default ul.sc-stencila-menu-default{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:inline-block;left:100%;margin:0;min-width:112px;padding:0;position:absolute;top:0;z-index:30}.sc-stencila-menu-default-h ul[aria-hidden].sc-stencila-menu-default,stencila-menu.sc-stencila-menu-default ul[aria-hidden].sc-stencila-menu-default{display:none}.sc-stencila-menu-default-h ul.sc-stencila-menu-default-s>:not(:last-child),stencila-menu ul.sc-stencila-menu-default-s>:not(:last-child){border:solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-width:0 0 1px}";

const menuMaterialCss = ".sc-stencila-menu-material-h ul.sc-stencila-menu-material{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);display:inline-block;margin:0;min-width:112px;padding:0;position:absolute;z-index:30}.sc-stencila-menu-material-h ul[aria-hidden].sc-stencila-menu-material{display:none}";

let menuIds = 0;
const Menu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.popperRef = null;
    /**
     * Determines whether the Menu is shown or not
     */
    this.isOpen = false;
    /**
     * Close the menu when losing focus
     */
    this.autoClose = true;
    /**
     * Open the menu on hover or when gaining focus
     */
    this.autoOpen = false;
    /**
     * The position relative to the toggle button where the menu should appear.
     */
    this.menuPosition = 'right-start';
    this.initMenu = () => {
      if (this.menuEl) {
        this.popperRef = popper.createPopper(this.el, this.menuEl, {
          placement: this.menuPosition,
          strategy: 'fixed',
          modifiers: [{ name: 'preventOverflow' }],
        });
      }
    };
    this.computeMenuLocation = () => {
      this.popperRef
        ? this.popperRef.update().catch((err) => {
          console.error('Could not update menu position', err);
        })
        : this.initMenu();
    };
    this.toggleMenu = (e) => {
      e.preventDefault();
      if (this.autoClose) {
        e.stopPropagation();
      }
      this.isOpen ? (this.isOpen = false) : this.openMenu();
    };
    this.openMenu = () => {
      this.computeMenuLocation();
      this.isOpen = true;
    };
    this.closeMenu = () => {
      if (this.autoClose) {
        this.isOpen = false;
      }
    };
    this.closeOnBlur = (e) => {
      if (this.isOpen && !this.el.contains(e.relatedTarget)) {
        this.autoCloseTimeoutRef = window.setTimeout(this.closeMenu, 250);
      }
    };
    this.clearTimeout = () => {
      window.clearTimeout(this.autoCloseTimeoutRef);
    };
    this.menuId = `stencila-menu-${menuIds++}`;
  }
  componentWillLoad() {
    if (this.autoClose) {
      this.el.addEventListener('mouseout', this.closeOnBlur);
      this.el.addEventListener('mouseenter', this.clearTimeout);
    }
    if (this.autoOpen) {
      this.el.addEventListener('mouseenter', this.openMenu);
      this.el.addEventListener('focus', this.openMenu);
    }
  }
  disconnectedCallback() {
    this.el.removeEventListener('mouseout', this.closeOnBlur);
    this.el.removeEventListener('mouseenter', this.clearTimeout);
    this.el.removeEventListener('mouseenter', this.openMenu);
    this.el.removeEventListener('focus', this.openMenu);
    if (this.popperRef) {
      this.popperRef.destroy();
      this.popperRef = null;
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("span", { onClick: this.toggleMenu, "aria-controls": this.menuId, "aria-expanded": this.isOpen ? 'true' : 'false' }, index.h("slot", { name: "toggle" })), index.h("ul", { role: "menu", "aria-hidden": !this.isOpen, "aria-orientation": "vertical", tabindex: "-1", id: this.menuId, onClick: this.closeMenu, ref: (el) => (this.menuEl = el) }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
Menu.style = {
  default: defaultMenuCss,
  material: menuMaterialCss
};

exports.stencila_menu = Menu;

//# sourceMappingURL=stencila-menu.cjs.entry.js.map