import { Component, Element, h, Host, Prop } from '@stencil/core';
import { createPopper } from '@popperjs/core';
let menuIds = 0;
export class Menu {
  constructor() {
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
        this.popperRef = createPopper(this.el, this.menuEl, {
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
    return (h(Host, null,
      h("span", { onClick: this.toggleMenu, "aria-controls": this.menuId, "aria-expanded": this.isOpen ? 'true' : 'false' },
        h("slot", { name: "toggle" })),
      h("ul", { role: "menu", "aria-hidden": !this.isOpen, "aria-orientation": "vertical", tabindex: "-1", id: this.menuId, onClick: this.closeMenu, ref: (el) => (this.menuEl = el) },
        h("slot", null))));
  }
  static get is() { return "stencila-menu"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["menu.css"],
    "material": ["menu.material.css"]
  }; }
  static get styleUrls() { return {
    "default": ["menu.css"],
    "material": ["menu.material.css"]
  }; }
  static get properties() { return {
    "isOpen": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Determines whether the Menu is shown or not"
      },
      "attribute": "is-open",
      "reflect": true,
      "defaultValue": "false"
    },
    "autoClose": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Close the menu when losing focus"
      },
      "attribute": "auto-close",
      "reflect": false,
      "defaultValue": "true"
    },
    "autoOpen": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Open the menu on hover or when gaining focus"
      },
      "attribute": "auto-open",
      "reflect": false,
      "defaultValue": "false"
    },
    "menuPosition": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "Placement",
        "resolved": "\"auto\" | \"auto-end\" | \"auto-start\" | \"bottom\" | \"bottom-end\" | \"bottom-start\" | \"left\" | \"left-end\" | \"left-start\" | \"right\" | \"right-end\" | \"right-start\" | \"top\" | \"top-end\" | \"top-start\"",
        "references": {
          "Placement": {
            "location": "import",
            "path": "@popperjs/core"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The position relative to the toggle button where the menu should appear."
      },
      "attribute": "menu-position",
      "reflect": false,
      "defaultValue": "'right-start'"
    }
  }; }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=menu.js.map