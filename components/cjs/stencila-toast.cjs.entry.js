'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');
const slotSelectors = require('./slotSelectors-a6d0c34c.js');
const toastController = require('./toastController-9c269d2d.js');
require('./_commonjsHelpers-537d719a.js');

const defaultToastCss = ".stencila-toast-container{-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column;flex-direction:column;height:100vh;left:0;padding:.5rem;pointer-events:none;position:fixed;top:0;width:100vw;z-index:50}.stencila-toast-container[position^=top]{-ms-flex-pack:start;justify-content:flex-start}.stencila-toast-container[position^=bottom]{-ms-flex-pack:end;justify-content:flex-end}.stencila-toast-container[position$=Start i]{-ms-flex-align:start;align-items:flex-start}.stencila-toast-container[position$=End i]{-ms-flex-align:end;align-items:flex-end}:host,stencila-toast{--color:var(--color-key,#000);--background:var(--color-stock,#fff);--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:var(--background);border:1px solid var(--color-neutral-200);border-radius:.375rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#fff;color:var(--color-stock,#fff);color:var(--color);display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-negative:0;flex-shrink:0;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;line-height:1.5rem;line-height:1;margin-bottom:.25rem;margin-top:.25rem;max-width:65ch;min-width:32ch;overflow:hidden;pointer-events:auto;position:relative}:host[data-enter],stencila-toast[data-enter]{-webkit-animation:fade-in .15s ease-in;animation:fade-in .15s ease-in;-webkit-animation-delay:calc(var(--i, 0)*50ms);animation-delay:calc(var(--i, 0)*50ms)}:host[data-exit],stencila-toast[data-exit]{-webkit-animation:fade-out .15s ease-out;animation:fade-out .15s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host .toastAccent,stencila-toast .toastAccent{color:#fff;color:var(--color-stock,#fff);line-height:1;padding:1rem .5rem}:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon{--height:1.25rem;--width:1.25rem;border-radius:9999px;display:block;margin-top:-.125rem;padding:.25rem}:host .toastAccent,:host([type=info]) .toastAccent,stencila-toast .toastAccent,stencila-toast[type=info] .toastAccent{background-color:#cfd2e1;background-color:var(--color-neutral-100,#cfd2e1);color:#595f78;color:var(--color-neutral-600,#595f78)}:host .toastAccent stencila-icon,:host([type=info]) .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon,stencila-toast[type=info] .toastAccent stencila-icon{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}:host([type=primary]),stencila-toast[type=primary]{border-color:#a7b3ff;border-color:var(--color-primary-200,#a7b3ff)}:host([type=primary]) .toastAccent,stencila-toast[type=primary] .toastAccent{background-color:#cacfff;background-color:var(--color-primary-100,#cacfff);color:#2069f2;color:var(--color-primary-500,#2069f2)}:host([type=primary]) .toastAccent stencila-icon,stencila-toast[type=primary] .toastAccent stencila-icon{background-color:#ebecff;background-color:var(--color-primary-50,#ebecff)}:host([type=success]),stencila-toast[type=success]{border-color:#9dcaa9;border-color:var(--color-success-200,#9dcaa9)}:host([type=success]) .toastAccent,stencila-toast[type=success] .toastAccent{background-color:#9dcaa9;background-color:var(--color-success-200,#9dcaa9);color:#3c8455;color:var(--color-success-500,#3c8455)}:host([type=success]) .toastAccent stencila-icon,stencila-toast[type=success] .toastAccent stencila-icon{background-color:#edf6ef;background-color:var(--color-success-50,#edf6ef)}:host([type=warn]),stencila-toast[type=warn]{border-color:#ffde88;border-color:var(--color-warn-200,#ffde88)}:host([type=warn]) .toastAccent,stencila-toast[type=warn] .toastAccent{background-color:#ffde88;background-color:var(--color-warn-200,#ffde88);color:#ba8925;color:var(--color-warn-600,#ba8925)}:host([type=warn]) .toastAccent stencila-icon,stencila-toast[type=warn] .toastAccent stencila-icon{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc)}:host([type=danger]),stencila-toast[type=danger]{border-color:#ffa6ae;border-color:var(--color-danger-200,#ffa6ae)}:host([type=danger]) .toastAccent,stencila-toast[type=danger] .toastAccent{background-color:#ffa6ae;background-color:var(--color-danger-200,#ffa6ae);color:#cf445e;color:var(--color-danger-500,#cf445e)}:host([type=danger]) .toastAccent stencila-icon,stencila-toast[type=danger] .toastAccent stencila-icon{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0)}:host([position=topStart]),stencila-toast[position=topStart]{-ms-flex-item-align:start;align-self:flex-start}:host([position=topEnd]),stencila-toast[position=topEnd]{-ms-flex-item-align:end;align-self:flex-end}:host .content,stencila-toast .content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:.875rem;-ms-flex-pack:center;justify-content:center;line-height:1.25rem;padding:1rem}:host [slot=title],stencila-toast [slot=title]{font-weight:700}:host [slot=actions]:not(:empty),stencila-toast [slot=actions]:not(:empty){display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:.5rem;width:100%}:host [slot=actions]:not(:empty)>:not(:first-child),stencila-toast [slot=actions]:not(:empty)>:not(:first-child){padding-left:.5rem}:host([dismissable]),stencila-toast[dismissable]{padding-right:2rem}:host .closeButton,stencila-toast .closeButton{position:absolute;right:.325rem;top:.325rem}@-webkit-keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}";

const materialToastCss = ".stencila-toast-container{-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox!important;display:flex!important;-ms-flex-direction:column;flex-direction:column;height:100vh;left:0;padding:.5rem;pointer-events:none;position:fixed;top:0;width:100vw;z-index:50}.stencila-toast-container[position^=top]{-ms-flex-pack:start;justify-content:flex-start}.stencila-toast-container[position^=bottom]{-ms-flex-pack:end;justify-content:flex-end}.stencila-toast-container[position$=Start i]{-ms-flex-align:start;align-items:flex-start}.stencila-toast-container[position$=End i]{-ms-flex-align:end;align-items:flex-end}:host,stencila-toast{--color:var(--color-key,#000);--background:var(--color-stock,#fff);--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color);background-color:var(--background);border:1px solid var(--color-neutral-200);border-radius:.375rem;-webkit-box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);box-shadow:0 0 #0000,0 0 #0000,var(--tw-shadow);-webkit-box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:#fff;color:var(--color-stock,#fff);color:var(--color);display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-negative:0;flex-shrink:0;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:1rem;line-height:1.5rem;line-height:1;margin-bottom:.25rem;margin-top:.25rem;max-width:65ch;min-width:32ch;overflow:hidden;pointer-events:auto;position:relative}:host[data-enter],stencila-toast[data-enter]{-webkit-animation:fade-in .15s ease-in;animation:fade-in .15s ease-in;-webkit-animation-delay:calc(var(--i, 0)*50ms);animation-delay:calc(var(--i, 0)*50ms)}:host[data-exit],stencila-toast[data-exit]{-webkit-animation:fade-out .15s ease-out;animation:fade-out .15s ease-out;-webkit-animation-fill-mode:both;animation-fill-mode:both}:host .toastAccent,stencila-toast .toastAccent{color:#fff;color:var(--color-stock,#fff);line-height:1;padding:1rem .5rem}:host .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon{--height:1.25rem;--width:1.25rem;border-radius:9999px;display:block;margin-top:-.125rem;padding:.25rem}:host .toastAccent,:host([type=info]) .toastAccent,stencila-toast .toastAccent,stencila-toast[type=info] .toastAccent{background-color:#cfd2e1;background-color:var(--color-neutral-100,#cfd2e1);color:#595f78;color:var(--color-neutral-600,#595f78)}:host .toastAccent stencila-icon,:host([type=info]) .toastAccent stencila-icon,stencila-toast .toastAccent stencila-icon,stencila-toast[type=info] .toastAccent stencila-icon{background-color:#e9eaf1;background-color:var(--color-neutral-50,#e9eaf1)}:host([type=primary]),stencila-toast[type=primary]{border-color:#a7b3ff;border-color:var(--color-primary-200,#a7b3ff)}:host([type=primary]) .toastAccent,stencila-toast[type=primary] .toastAccent{background-color:#cacfff;background-color:var(--color-primary-100,#cacfff);color:#2069f2;color:var(--color-primary-500,#2069f2)}:host([type=primary]) .toastAccent stencila-icon,stencila-toast[type=primary] .toastAccent stencila-icon{background-color:#ebecff;background-color:var(--color-primary-50,#ebecff)}:host([type=success]),stencila-toast[type=success]{border-color:#9dcaa9;border-color:var(--color-success-200,#9dcaa9)}:host([type=success]) .toastAccent,stencila-toast[type=success] .toastAccent{background-color:#9dcaa9;background-color:var(--color-success-200,#9dcaa9);color:#3c8455;color:var(--color-success-500,#3c8455)}:host([type=success]) .toastAccent stencila-icon,stencila-toast[type=success] .toastAccent stencila-icon{background-color:#edf6ef;background-color:var(--color-success-50,#edf6ef)}:host([type=warn]),stencila-toast[type=warn]{border-color:#ffde88;border-color:var(--color-warn-200,#ffde88)}:host([type=warn]) .toastAccent,stencila-toast[type=warn] .toastAccent{background-color:#ffde88;background-color:var(--color-warn-200,#ffde88);color:#ba8925;color:var(--color-warn-600,#ba8925)}:host([type=warn]) .toastAccent stencila-icon,stencila-toast[type=warn] .toastAccent stencila-icon{background-color:#fff3cc;background-color:var(--color-warn-50,#fff3cc)}:host([type=danger]),stencila-toast[type=danger]{border-color:#ffa6ae;border-color:var(--color-danger-200,#ffa6ae)}:host([type=danger]) .toastAccent,stencila-toast[type=danger] .toastAccent{background-color:#ffa6ae;background-color:var(--color-danger-200,#ffa6ae);color:#cf445e;color:var(--color-danger-500,#cf445e)}:host([type=danger]) .toastAccent stencila-icon,stencila-toast[type=danger] .toastAccent stencila-icon{background-color:#ffeff0;background-color:var(--color-danger-50,#ffeff0)}:host([position=topStart]),stencila-toast[position=topStart]{-ms-flex-item-align:start;align-self:flex-start}:host([position=topEnd]),stencila-toast[position=topEnd]{-ms-flex-item-align:end;align-self:flex-end}:host .content,stencila-toast .content{-ms-flex-align:start;align-items:flex-start;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:.875rem;-ms-flex-pack:center;justify-content:center;line-height:1.25rem;padding:1rem}:host [slot=title],stencila-toast [slot=title]{font-weight:700}:host [slot=actions]:not(:empty),stencila-toast [slot=actions]:not(:empty){display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;margin-top:.5rem;width:100%}:host [slot=actions]:not(:empty)>:not(:first-child),stencila-toast [slot=actions]:not(:empty)>:not(:first-child){padding-left:.5rem}:host([dismissable]),stencila-toast[dismissable]{padding-right:2rem}:host .closeButton,stencila-toast .closeButton{position:absolute;right:.325rem;top:.325rem}@-webkit-keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes fade-in{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes fade-out{0%{max-height:none;opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{max-height:0;opacity:0;padding-bottom:0;padding-top:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}";

const StencilaToast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * If true, shows a "close" button to immediately dismiss the toast.
     * Note that this prop has no effect if `duration` is set to zero, in which case
     * the toast will always show the "close" button.
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
    this.type = toastController.ToastTypes.neutral;
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
      var _a;
      const buttons = Array.from((_a = slotSelectors.getSlotByName(this.el)('actions')) !== null && _a !== void 0 ? _a : [])
        .reduce((actions, el) => [...actions, ...Array.from(el.children)], [])
        .filter((el) => el.tagName.toLowerCase() === 'stencila-button' &&
        !el.classList.contains('closeButton'));
      buttons.forEach((el, idx) => {
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
    return (index.h(index.Host, { type: this.type, position: this.position, dismissable: this.dismissable === true || this.duration === 0, onMouseEnter: this.pauseAutoDismiss, onMouseLeave: this.autoDismiss }, index.h("div", { class: "toastAccent" }, index.h("stencila-icon", { icon: this.getIconByType(), iconStyle: "fill" })), index.h("div", { class: "content" }, index.h("slot", { name: "title" }), index.h("slot", null), index.h("slot", { name: "actions" })), (this.dismissable === true || this.duration === 0) && (index.h("stencila-button", { color: "neutral", iconOnly: true, icon: "close", minimal: true, size: "small", onClick: this.dismiss, class: "closeButton" }))));
  }
  get el() { return index.getElement(this); }
};
StencilaToast.style = {
  default: defaultToastCss,
  material: materialToastCss
};

exports.stencila_toast = StencilaToast;

//# sourceMappingURL=stencila-toast.cjs.entry.js.map