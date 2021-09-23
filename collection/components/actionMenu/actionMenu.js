import { Component, Element, h, Prop, State } from '@stencil/core';
const slots = {
  default: '',
  persistentActions: 'persistentActions',
};
export class ActionMenu {
  constructor() {
    this.isCollapsed = false;
    this.toggleActionMenu = () => (this.isCollapsed = !this.isCollapsed);
    this.width = 'auto';
    this.isAnimating = false;
    this.isTransitioning = false;
    this.calculateWidth = () => {
      if (this.actionContainerRef && this.isTransitioning === false) {
        this.width = 'auto';
        const width = this.actionContainerRef.getBoundingClientRect().width;
        this.width = `${width}px`;
      }
    };
    this.observer = new window.MutationObserver(this.calculateWidth);
    this.checkForSecondaryActions = () => {
      this.hasSecondaryActions = Array.from(this.el.children).some((child) => {
        return child.slot === '';
      });
      return this.hasSecondaryActions;
    };
  }
  componentWillLoad() {
    this.checkForSecondaryActions();
  }
  componentDidLoad() {
    if (this.actionContainerRef) {
      window.requestAnimationFrame(() => {
        if (this.actionContainerRef && this.hasSecondaryActions) {
          this.actionContainerRef.addEventListener('transitionstart', () => (this.isTransitioning = true));
          this.actionContainerRef.addEventListener('transitionend', () => (this.isTransitioning = false));
          this.observer.observe(this.el, {
            characterData: true,
            subtree: true,
          });
          this.calculateWidth();
          this.isCollapsed = true;
        }
      });
    }
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    if (this.el.children.length <= 0)
      return null;
    return (h("nav", null,
      h("span", { class: "persistentActions" },
        h("slot", { name: slots.persistentActions })),
      h("span", { class: {
          secondaryActions: true,
          hidden: !this.hasSecondaryActions,
        } },
        h("stencila-button", { onClick: this.toggleActionMenu, icon: "more", color: "key", minimal: true, size: "xsmall", iconOnly: true, ariaLabel: "Toggle Action Menu" }),
        h("span", { class: {
            actionContainer: true,
            isAnimating: this.isAnimating,
            isCollapsed: this.isCollapsed,
          }, ref: (el) => (this.actionContainerRef = el), style: { '--max-width': this.width } },
          h("slot", null)))));
  }
  static get is() { return "stencila-action-menu"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["actionMenu.css"],
    "material": ["actionMenu.css"]
  }; }
  static get styleUrls() { return {
    "default": ["actionMenu.css"],
    "material": ["actionMenu.css"]
  }; }
  static get properties() { return {
    "actions": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "HTMLButtonElement[]",
        "resolved": "HTMLButtonElement[]",
        "references": {
          "HTMLButtonElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "List of buttons to include in Action Menu."
      }
    }
  }; }
  static get states() { return {
    "hasSecondaryActions": {},
    "isCollapsed": {},
    "width": {},
    "isAnimating": {}
  }; }
  static get elementRef() { return "el"; }
}
