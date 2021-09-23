import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-364020fb.js';
import { c as closest, i as injectGlobalStyle, s as setCustomProperties, p as presence, a as enterChildren, e as exitChildren, b as isHTMLElement, h as hasData } from './index-af0083ae.js';
import { g as getSlotByName } from './slotSelectors-8761b1b3.js';
import { b as ToastTypes, T as ToastPositions } from './toastController-7495e3c9.js';
import './_commonjsHelpers-8a9f3b18.js';

const hold = (el) => async (cb) => {
  el.dataset.hold = '';
  await cb(el).then((r) => {
    if (r && 'finished' in r) {
      return r.finished;
    }
    return;
  });
  delete el.dataset.hold;
};
const AnimatePresence = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.animatePresenceExitComplete = createEvent(this, "animatePresenceExitComplete", 7);
    this.animatePresenceEnter = createEvent(this, "animatePresenceEnter", 7);
    this.animatePresenceExit = createEvent(this, "animatePresenceExit", 7);
    /** @internal */
    this.__presenceKey = `animate-presence-${ids++}`;
    /** @internal */
    this.descendants = [];
    this.getClosestParent = () => {
      var _a;
      const base = (_a = this.element.parentElement, (_a !== null && _a !== void 0 ? _a : this.element.getRootNode().host));
      return closest(this.element.tagName, base);
    };
    this.willExit = false;
    this.didExit = false;
    this.willEnter = false;
    this.didEnter = false;
    this.handleMutation = this.handleMutation.bind(this);
  }
  observeChanged() {
    if (this.observe) {
      this.addMO();
      this.mo.observe(this.element, {
        childList: true,
        attributes: true,
        attributeFilter: ['data-key'],
      });
    }
    else {
      this.removeMO();
    }
  }
  async componentWillLoad() {
    var _a, _b;
    injectGlobalStyle();
    this.ancestor = this.getClosestParent();
    if (typeof this.observe === 'undefined') {
      this.observe = (_b = (_a = this.ancestor) === null || _a === void 0 ? void 0 : _a.observe, (_b !== null && _b !== void 0 ? _b : true));
    }
    Array.from(this.element.children).map((el, i) => {
      setCustomProperties(el, { i });
      el.style.setProperty('animation-play-state', 'paused');
      el.dataset.enter = '';
    });
  }
  async componentDidLoad() {
    var _a;
    this.observeChanged();
    (_a = this.ancestor) === null || _a === void 0 ? void 0 : _a.registerChild(this.element);
    if (!this.ancestor) {
      this.enter();
    }
  }
  async componentDidUnload() {
    var _a;
    this.removeMO();
    (_a = this.ancestor) === null || _a === void 0 ? void 0 : _a.unregisterChild(this.__presenceKey);
    this.descendants = [];
  }
  async enterNode(el, i = 0) {
    delete el.dataset.exit;
    const event = new CustomEvent('animatePresenceEnter', {
      bubbles: true,
      detail: {
        i,
        hold: hold(el),
      },
    });
    el.dispatchEvent(event);
    el.style.removeProperty('animation-play-state');
    el.dataset.enter = '';
    setCustomProperties(el, { i });
    await presence(el, {
      afterSelf: async () => {
        delete el.dataset.initial;
        delete el.dataset.enter;
        el.style.removeProperty('--i');
      },
    });
    return enterChildren(el);
  }
  async exitNode(el, method = 'remove', i = 0) {
    await exitChildren(el);
    delete el.dataset.willExit;
    setCustomProperties(el, { i });
    const event = new CustomEvent('animatePresenceExit', {
      bubbles: true,
      detail: {
        i,
        hold: hold(el),
      },
    });
    el.dispatchEvent(event);
    el.dataset.exit = '';
    await presence(el, {
      afterSelf: () => {
        if (method === 'remove') {
          el.remove();
        }
        else if (method === 'hide') {
          el.style.setProperty('visibility', 'hidden');
        }
      },
    });
    return Promise.resolve();
  }
  async handleEnter(node, _record, i) {
    if (!isHTMLElement(node))
      return;
    if (hasData(node, 'exit'))
      return;
    if (hasData(node, 'willExit')) {
      return this.exitNode(node, 'remove', i);
    }
    else {
      return this.enterNode(node, i);
    }
  }
  async handleExit(node, record, i) {
    if (!isHTMLElement(node))
      return;
    if (hasData(node, 'exit') || hasData(node, 'willExit')) {
      return;
    }
    node.dataset.willExit = '';
    setCustomProperties(node, { i });
    if (isHTMLElement(record.previousSibling)) {
      record.previousSibling.insertAdjacentElement('afterend', node);
    }
    else if (isHTMLElement(record.target)) {
      record.target.prepend(node);
    }
  }
  handleMutation(records) {
    let i = 0;
    for (const record of records.reverse()) {
      if (record.addedNodes.length === 1) {
        this.handleEnter(record.addedNodes[0], record, records.length - 1 - i);
      }
      if (record.removedNodes.length === 1) {
        this.handleExit(record.removedNodes[0], record, i);
      }
      i++;
    }
  }
  addMO() {
    if (!this.mo) {
      if ('MutationObserver' in window) {
        this.mo = new MutationObserver(this.handleMutation);
        this.observeChanged();
      }
    }
  }
  removeMO() {
    if (this.mo) {
      this.mo.disconnect();
      this.mo = undefined;
    }
  }
  /** @internal Registers a child element across shadow boundaries */
  async registerChild(el) {
    const key = el.__presenceKey;
    // Remove existing elements with same key to handle HMR
    this.descendants = [
      ...this.descendants.filter(element => element.__presenceKey !== key),
      el,
    ];
    return;
  }
  /** @internal */
  async unregisterChild(key) {
    this.descendants = this.descendants.filter(el => el.__presenceKey !== key);
    return;
  }
  animatePresenceExitCompleteHandler(event) {
    event.stopPropagation();
  }
  /**
   * Programmatically triggers an exit.
   *
   * Nested `<animate-presence>` children will be animated out from the bottom up, meaning that children elements trigger a parent's exit after their own exit finishes.
   */
  async exit() {
    if (this.didExit || this.willExit)
      return;
    this.willExit = true;
    await Promise.all(Array.from(this.element.children)
      .reverse()
      .map((el, i) => this.exitNode(el, 'hide', i)));
    this.didExit = true;
    this.willExit = false;
    this.animatePresenceExitComplete.emit();
    return Promise.resolve();
  }
  /**
   * Programmatically triggers an entrance.
   *
   * Nested `<animate-presence>` children will be animated in from the top down, meaning that parent elements trigger a child's entrance after their own entrance finishes.
   */
  async enter() {
    this.didExit = false;
    this.willExit = false;
    if (this.didEnter || this.willEnter)
      return;
    this.willEnter = true;
    await Promise.all(Array.from(this.element.children).map((el, i) => this.enterNode(el, i)));
    await enterChildren(this.element);
    this.didEnter = true;
    this.willEnter = false;
    return Promise.resolve();
  }
  render() {
    return (h(Host, { style: { display: 'contents' } }, h("slot", null)));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "observe": ["observeChanged"]
  }; }
};
let ids = 0;

const defaultToastCss = ".stencila-toast-container{-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;display:flex!important;-ms-flex-direction:column;flex-direction:column;height:100vh;left:0;padding:.5rem;pointer-events:none;position:fixed;top:0;width:100vw;z-index:1}.stencila-toast-container[position^=top]{-ms-flex-pack:start;justify-content:flex-start}.stencila-toast-container[position^=bottom]{-ms-flex-pack:end;justify-content:flex-end}.stencila-toast-container[position$=Start i]{-ms-flex-align:start;align-items:flex-start}.stencila-toast-container[position$=End i]{-ms-flex-align:end;align-items:flex-end}:host,stencila-toast{--color:var(--color-key,#000);--background:var(--color-stock,#fff)}:host,stencila-toast{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);border-radius:.375rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#fff;color:var(--color-stock,#fff);display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-negative:0;flex-shrink:0;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;line-height:1.5rem;line-height:1;margin-bottom:.25rem;margin-top:.25rem;max-width:65ch;overflow:hidden;pointer-events:auto;position:relative}:host,stencila-toast{background-color:var(--background);border:1px solid var(--color-neutral-200);color:var(--color);min-width:32ch}:host([data-enter]),stencila-toast[data-enter]{-webkit-animation:fade-in .15s ease-in;animation:fade-in .15s ease-in;-webkit-animation-delay:0ms;animation-delay:0ms;-webkit-animation-delay:calc(var(--i, 0)*50ms);animation-delay:calc(var(--i, 0)*50ms)}:host([data-exit]),stencila-toast[data-exit]{-webkit-animation:fade-out .15s ease-out;animation:fade-out .15s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host .toastAccent,stencila-toast .toastAccent{color:#fff;color:var(--color-stock,#fff);line-height:1;padding:1rem .5rem}:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon{--height:1.25rem;--width:1.25rem;border-radius:9999px;display:block;margin-top:-.125rem;padding:.25rem}:host([type=info]) .toastAccent,:host .toastAccent,stencila-toast .toastAccent,stencila-toast[type=info] .toastAccent{background-color:#cfd2e1;background-color:var(--color-neutral-100,#cfd2e1);color:#595f78;color:var(--color-neutral-600,#595f78)}:host([type=info]) .toastAccent stencila-icon,:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon,stencila-toast[type=info] .toastAccent stencila-icon{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}:host([type=primary]),stencila-toast[type=primary]{border-color:#a7b3ff;border-color:var(--color-primary-200,#a7b3ff)}:host([type=primary]) .toastAccent,stencila-toast[type=primary] .toastAccent{background-color:#cacfff;background-color:var(--color-primary-100,#cacfff);color:#2069f2;color:var(--color-primary-500,#2069f2)}:host([type=primary]) .toastAccent stencila-icon,stencila-toast[type=primary] .toastAccent stencila-icon{background-color:#ebecff;background-color:var(--color-primary-50,#ebecff)}:host([type=success]),stencila-toast[type=success]{border-color:#9dcaa9;border-color:var(--color-success-200,#9dcaa9)}:host([type=success]) .toastAccent,stencila-toast[type=success] .toastAccent{background-color:#9dcaa9;background-color:var(--color-success-200,#9dcaa9);color:#3c8455;color:var(--color-success-500,#3c8455)}:host([type=success]) .toastAccent stencila-icon,stencila-toast[type=success] .toastAccent stencila-icon{background-color:#edf6ef;background-color:var(--color-success-50,#edf6ef)}:host([type=warn]),stencila-toast[type=warn]{border-color:#ffde88;border-color:var(--color-warn-200,#ffde88)}:host([type=warn]) .toastAccent,stencila-toast[type=warn] .toastAccent{background-color:#ffde88;background-color:var(--color-warn-200,#ffde88);color:#ba8925;color:var(--color-warn-600,#ba8925)}:host([type=warn]) .toastAccent stencila-icon,stencila-toast[type=warn] .toastAccent stencila-icon{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc)}:host([type=danger]),stencila-toast[type=danger]{border-color:#ffa6ae;border-color:var(--color-danger-200,#ffa6ae)}:host([type=danger]) .toastAccent,stencila-toast[type=danger] .toastAccent{background-color:#ffa6ae;background-color:var(--color-danger-200,#ffa6ae);color:#cf445e;color:var(--color-danger-500,#cf445e)}:host([type=danger]) .toastAccent stencila-icon,stencila-toast[type=danger] .toastAccent stencila-icon{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0)}:host([position=topStart]),stencila-toast[position=topStart]{-ms-flex-item-align:start;align-self:flex-start}:host([position=topEnd]),stencila-toast[position=topEnd]{-ms-flex-item-align:end;align-self:flex-end}:host .content,stencila-toast .content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:.875rem;-ms-flex-pack:center;justify-content:center;line-height:1.25rem;padding:1rem}:host [slot=title],stencila-toast [slot=title]{font-weight:700}:host [slot=actions]:not(:empty),stencila-toast [slot=actions]:not(:empty){display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:.5rem;width:100%}:host [slot=actions]:not(:empty)>:not(:first-child),stencila-toast [slot=actions]:not(:empty)>:not(:first-child){padding-left:.5rem}:host([dismissable]),stencila-toast[dismissable]{padding-right:2rem}:host .closeButton,stencila-toast .closeButton{position:absolute;right:.325rem;top:.325rem}@-webkit-keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}";

const materialToastCss = ".stencila-toast-container{-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;display:flex!important;-ms-flex-direction:column;flex-direction:column;height:100vh;left:0;padding:.5rem;pointer-events:none;position:fixed;top:0;width:100vw;z-index:1}.stencila-toast-container[position^=top]{-ms-flex-pack:start;justify-content:flex-start}.stencila-toast-container[position^=bottom]{-ms-flex-pack:end;justify-content:flex-end}.stencila-toast-container[position$=Start i]{-ms-flex-align:start;align-items:flex-start}.stencila-toast-container[position$=End i]{-ms-flex-align:end;align-items:flex-end}:host,stencila-toast{--color:var(--color-key,#000);--background:var(--color-stock,#fff)}:host,stencila-toast{--tw-shadow:0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05);border-radius:.375rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#fff;color:var(--color-stock,#fff);display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-negative:0;flex-shrink:0;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;line-height:1.5rem;line-height:1;margin-bottom:.25rem;margin-top:.25rem;max-width:65ch;overflow:hidden;pointer-events:auto;position:relative}:host,stencila-toast{background-color:var(--background);border:1px solid var(--color-neutral-200);color:var(--color);min-width:32ch}:host([data-enter]),stencila-toast[data-enter]{-webkit-animation:fade-in .15s ease-in;animation:fade-in .15s ease-in;-webkit-animation-delay:0ms;animation-delay:0ms;-webkit-animation-delay:calc(var(--i, 0)*50ms);animation-delay:calc(var(--i, 0)*50ms)}:host([data-exit]),stencila-toast[data-exit]{-webkit-animation:fade-out .15s ease-out;animation:fade-out .15s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host .toastAccent,stencila-toast .toastAccent{color:#fff;color:var(--color-stock,#fff);line-height:1;padding:1rem .5rem}:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon{--height:1.25rem;--width:1.25rem;border-radius:9999px;display:block;margin-top:-.125rem;padding:.25rem}:host([type=info]) .toastAccent,:host .toastAccent,stencila-toast .toastAccent,stencila-toast[type=info] .toastAccent{background-color:#cfd2e1;background-color:var(--color-neutral-100,#cfd2e1);color:#595f78;color:var(--color-neutral-600,#595f78)}:host([type=info]) .toastAccent stencila-icon,:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon,stencila-toast[type=info] .toastAccent stencila-icon{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}:host([type=primary]),stencila-toast[type=primary]{border-color:#a7b3ff;border-color:var(--color-primary-200,#a7b3ff)}:host([type=primary]) .toastAccent,stencila-toast[type=primary] .toastAccent{background-color:#cacfff;background-color:var(--color-primary-100,#cacfff);color:#2069f2;color:var(--color-primary-500,#2069f2)}:host([type=primary]) .toastAccent stencila-icon,stencila-toast[type=primary] .toastAccent stencila-icon{background-color:#ebecff;background-color:var(--color-primary-50,#ebecff)}:host([type=success]),stencila-toast[type=success]{border-color:#9dcaa9;border-color:var(--color-success-200,#9dcaa9)}:host([type=success]) .toastAccent,stencila-toast[type=success] .toastAccent{background-color:#9dcaa9;background-color:var(--color-success-200,#9dcaa9);color:#3c8455;color:var(--color-success-500,#3c8455)}:host([type=success]) .toastAccent stencila-icon,stencila-toast[type=success] .toastAccent stencila-icon{background-color:#edf6ef;background-color:var(--color-success-50,#edf6ef)}:host([type=warn]),stencila-toast[type=warn]{border-color:#ffde88;border-color:var(--color-warn-200,#ffde88)}:host([type=warn]) .toastAccent,stencila-toast[type=warn] .toastAccent{background-color:#ffde88;background-color:var(--color-warn-200,#ffde88);color:#ba8925;color:var(--color-warn-600,#ba8925)}:host([type=warn]) .toastAccent stencila-icon,stencila-toast[type=warn] .toastAccent stencila-icon{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc)}:host([type=danger]),stencila-toast[type=danger]{border-color:#ffa6ae;border-color:var(--color-danger-200,#ffa6ae)}:host([type=danger]) .toastAccent,stencila-toast[type=danger] .toastAccent{background-color:#ffa6ae;background-color:var(--color-danger-200,#ffa6ae);color:#cf445e;color:var(--color-danger-500,#cf445e)}:host([type=danger]) .toastAccent stencila-icon,stencila-toast[type=danger] .toastAccent stencila-icon{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0)}:host([position=topStart]),stencila-toast[position=topStart]{-ms-flex-item-align:start;align-self:flex-start}:host([position=topEnd]),stencila-toast[position=topEnd]{-ms-flex-item-align:end;align-self:flex-end}:host .content,stencila-toast .content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:.875rem;-ms-flex-pack:center;justify-content:center;line-height:1.25rem;padding:1rem}:host [slot=title],stencila-toast [slot=title]{font-weight:700}:host [slot=actions]:not(:empty),stencila-toast [slot=actions]:not(:empty){display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:.5rem;width:100%}:host [slot=actions]:not(:empty)>:not(:first-child),stencila-toast [slot=actions]:not(:empty)>:not(:first-child){padding-left:.5rem}:host([dismissable]),stencila-toast[dismissable]{padding-right:2rem}:host .closeButton,stencila-toast .closeButton{position:absolute;right:.325rem;top:.325rem}@-webkit-keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}";

const StencilaToast = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * If true, shows a "close" button to immediately dismiss the toast
     */
    this.dismissable = false;
    /**
     * Duration in milliseconds for how long the toast should be display
     * Setting `duration` to `0` will disable auto-dismissal of the toast.
     */
    this.duration = 4000;
    /**
     * Type of the toast to show. Affects the component colour scheme.
     */
    this.type = ToastTypes.neutral;
    this.getIconByType = () => {
      switch (this.type) {
        case 'success': {
          return 'checkbox-circle';
        }
        case 'danger': {
          return 'forbid';
        }
        case 'warn': {
          return 'error-warning';
        }
        case 'neutral':
        default: {
          return 'question';
        }
      }
    };
    this.dismiss = () => {
      var _a, _b;
      window.clearTimeout(this.timeout);
      (_b = (_a = this.el) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(this.el);
    };
    this.pauseAutoDismiss = () => {
      window.clearTimeout(this.timeout);
    };
    this.autoDismiss = () => {
      if (this.duration !== undefined && this.duration <= 0) {
        return;
      }
      window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(() => {
        this.dismiss();
      }, this.duration);
    };
    this.styleActionButtons = () => {
      var _a, _b;
      const buttons = Array.from((_b = (_a = getSlotByName(this.el)('actions')) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : []).filter((el) => el.tagName.toLowerCase() === 'stencila-button' &&
        !el.classList.contains('closeButton'));
      buttons.map((el, idx) => {
        el.setAttribute('size', 'xsmall');
        if (idx === 0) {
          el.setAttribute('color', this.type);
        }
        if (idx > 0) {
          el.setAttribute('color', 'neutral');
          el.setAttribute('minimal', 'minimal');
        }
      });
    };
  }
  componentWillLoad() {
    this.styleActionButtons();
  }
  componentDidLoad() {
    this.autoDismiss();
  }
  render() {
    return (h(Host, { type: this.type, position: this.position, dismissable: this.dismissable || this.duration === 0, onMouseEnter: this.pauseAutoDismiss, onMouseLeave: this.autoDismiss }, h("div", { class: "toastAccent" }, h("stencila-icon", { icon: this.getIconByType(), iconStyle: "fill" })), h("div", { class: "content" }, h("slot", { name: "title" }), h("slot", null), h("slot", { name: "actions" })), (this.dismissable || this.duration === 0) && (h("stencila-button", { color: "neutral", iconOnly: true, icon: "close", minimal: true, size: "small", onClick: this.dismiss, class: "closeButton" }))));
  }
  get el() { return getElement(this); }
};
StencilaToast.style = {
  default: defaultToastCss,
  material: materialToastCss
};

const StencilaToastContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Default position of Toasts on the screen.
     * Can be overridden by individual Toast instances.
     */
    this.position = ToastPositions.topCenter;
  }
  render() {
    return (h(Host, { class: "stencila-toast-container", position: this.position }, h("animate-presence", { "aria-live": "polite", role: "status", "aria-relevant": "additions" }, h("slot", null))));
  }
};

export { AnimatePresence as animate_presence, StencilaToast as stencila_toast, StencilaToastContainer as stencila_toast_container };
