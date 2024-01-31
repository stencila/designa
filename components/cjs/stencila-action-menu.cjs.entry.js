'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');

const defaultActionMenuCss = ".sc-stencila-action-menu-default-h{--background:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);background-color:var(--background);border-bottom-left-radius:.25rem;border-color:var(--border);border-style:solid;border-width:0 0 1px 1px;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.75rem;line-height:1rem;line-height:1;padding:1px .25rem;position:absolute;right:0;top:0}.sc-stencila-action-menu-default-h .hidden.sc-stencila-action-menu-default{display:none}.sc-stencila-action-menu-default-h nav.sc-stencila-action-menu-default>*.sc-stencila-action-menu-default{vertical-align:middle}.sc-stencila-action-menu-default-h ul.sc-stencila-action-menu-default{list-style-type:none;margin:0;padding:0}.sc-stencila-action-menu-default-h li.sc-stencila-action-menu-default{display:inline;padding-right:.25rem}.sc-stencila-action-menu-default-h li.sc-stencila-action-menu-default:last-child{padding-right:0}.sc-stencila-action-menu-default-h .sc-stencila-action-menu-default-s>stencila-button,.sc-stencila-action-menu-default-h stencila-button.sc-stencila-action-menu-default{display:inline-block}.sc-stencila-action-menu-default-h .actionContainer.sc-stencila-action-menu-default{display:inline-block;overflow:hidden;-webkit-transition:width .12s ease-in-out;transition:width .12s ease-in-out;vertical-align:middle;white-space:nowrap;width:var(--max-width)}.sc-stencila-action-menu-default-h .actionContainer.sc-stencila-action-menu-default:not(.isAnimating):not(.isCollapsed){width:auto}.sc-stencila-action-menu-default-h .secondaryActions.sc-stencila-action-menu-default:not(:hover):not(:focus) .actionContainer.isCollapsed.sc-stencila-action-menu-default{width:0}";

const materialActionMenuCss = ".sc-stencila-action-menu-material-h{--background:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);background-color:var(--background);border-bottom-left-radius:.25rem;border-color:var(--border);border-style:solid;border-width:0 0 1px 1px;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.75rem;line-height:1rem;line-height:1;padding:1px .25rem;position:absolute;right:0;top:0}.sc-stencila-action-menu-material-h .hidden.sc-stencila-action-menu-material{display:none}.sc-stencila-action-menu-material-h nav.sc-stencila-action-menu-material>*.sc-stencila-action-menu-material{vertical-align:middle}.sc-stencila-action-menu-material-h ul.sc-stencila-action-menu-material{list-style-type:none;margin:0;padding:0}.sc-stencila-action-menu-material-h li.sc-stencila-action-menu-material{display:inline;padding-right:.25rem}.sc-stencila-action-menu-material-h li.sc-stencila-action-menu-material:last-child{padding-right:0}.sc-stencila-action-menu-material-h .sc-stencila-action-menu-material-s>stencila-button,.sc-stencila-action-menu-material-h stencila-button.sc-stencila-action-menu-material{display:inline-block}.sc-stencila-action-menu-material-h .actionContainer.sc-stencila-action-menu-material{display:inline-block;overflow:hidden;-webkit-transition:width .12s ease-in-out;transition:width .12s ease-in-out;vertical-align:middle;white-space:nowrap;width:var(--max-width)}.sc-stencila-action-menu-material-h .actionContainer.sc-stencila-action-menu-material:not(.isAnimating):not(.isCollapsed){width:auto}.sc-stencila-action-menu-material-h .secondaryActions.sc-stencila-action-menu-material:not(:hover):not(:focus) .actionContainer.isCollapsed.sc-stencila-action-menu-material{width:0}";

const slots = {
  default: '',
  persistentActions: 'persistentActions',
};
const ActionMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("nav", null, index.h("span", { class: "persistentActions" }, index.h("slot", { name: slots.persistentActions })), index.h("span", { class: {
        secondaryActions: true,
        hidden: !this.hasSecondaryActions,
      } }, index.h("stencila-button", { onClick: this.toggleActionMenu, icon: "more", color: "key", minimal: true, size: "xsmall", iconOnly: true, ariaLabel: "Toggle Action Menu" }), index.h("span", { class: {
        actionContainer: true,
        isAnimating: this.isAnimating,
        isCollapsed: this.isCollapsed,
      }, ref: (el) => (this.actionContainerRef = el), style: { '--max-width': this.width } }, index.h("slot", null)))));
  }
  get el() { return index.getElement(this); }
};
ActionMenu.style = {
  default: defaultActionMenuCss,
  material: materialActionMenuCss
};

exports.stencila_action_menu = ActionMenu;

//# sourceMappingURL=stencila-action-menu.cjs.entry.js.map