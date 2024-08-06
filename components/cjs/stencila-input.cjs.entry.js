'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c157949f.js');

const defaultInputCss = ".sc-stencila-input-default-h,stencila-input.sc-stencila-input-default{display:block;font-size:1rem;line-height:1.5rem;line-height:1;position:relative}.inline.sc-stencila-input-default-h,stencila-input.inline.sc-stencila-input-default{display:inline-block}.sc-stencila-input-default-h stencila-icon.sc-stencila-input-default,stencila-input.sc-stencila-input-default stencila-icon.sc-stencila-input-default{color:#6e7591;color:var(--color-neutral-500,#6e7591);left:0;padding-left:.5rem;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.sc-stencila-input-default-h stencila-icon.sc-stencila-input-default+input.sc-stencila-input-default,stencila-input.sc-stencila-input-default stencila-icon.sc-stencila-input-default+input.sc-stencila-input-default{padding-left:2rem}.sc-stencila-input-default-h input.sc-stencila-input-default,stencila-input.sc-stencila-input-default input.sc-stencila-input-default{background-color:#fff;background-color:var(--color-stock,#fff);border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;font-size:1rem;line-height:1.5rem;line-height:1;padding:.25rem .5rem;width:100%}.sc-stencila-input-default-h input.sc-stencila-input-default:active,.sc-stencila-input-default-h input.sc-stencila-input-default:focus,stencila-input.sc-stencila-input-default input.sc-stencila-input-default:active,stencila-input.sc-stencila-input-default input.sc-stencila-input-default:focus{border-color:#2069f2;border-color:var(--color-primary-500,#2069f2);outline:2px solid transparent;outline-offset:2px}";

const inputMaterialCss = ".sc-stencila-input-material-h,stencila-input.sc-stencila-input-material{display:block;font-size:1rem;line-height:1.5rem;line-height:1;position:relative}.inline.sc-stencila-input-material-h,stencila-input.inline.sc-stencila-input-material{display:inline-block}.sc-stencila-input-material-h stencila-icon.sc-stencila-input-material,stencila-input.sc-stencila-input-material stencila-icon.sc-stencila-input-material{color:#6e7591;color:var(--color-neutral-500,#6e7591);left:0;padding-left:.5rem;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.sc-stencila-input-material-h stencila-icon.sc-stencila-input-material+input.sc-stencila-input-material,stencila-input.sc-stencila-input-material stencila-icon.sc-stencila-input-material+input.sc-stencila-input-material{padding-left:2rem}.sc-stencila-input-material-h input.sc-stencila-input-material,stencila-input.sc-stencila-input-material input.sc-stencila-input-material{border:1px solid #cfd2e1;border-color:var(--color-neutral-100,#cfd2e1);border-radius:.25rem;font-size:1rem;line-height:1.5rem;line-height:1;padding:.5rem;width:100%}.sc-stencila-input-material-h input.sc-stencila-input-material:active,.sc-stencila-input-material-h input.sc-stencila-input-material:focus,stencila-input.sc-stencila-input-material input.sc-stencila-input-material:active,stencila-input.sc-stencila-input-material input.sc-stencila-input-material:focus{border-color:#2069f2;border-color:var(--color-primary-500,#2069f2);-webkit-box-shadow:inset 0 0 0 1px var(--color-primary-500);box-shadow:inset 0 0 0 1px var(--color-primary-500);outline:2px solid transparent;outline-offset:2px}";

const Input = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * Automatically bring cursor focus to the input field on render.
     */
    this.autoFocus = false;
    /**
     * Type of input field.
     */
    this.type = 'text';
    /**
     * Visually conceal the input label.
     * Use sparingly for simple forms only with a descriptive action button.
     */
    this.hideLabel = false;
    /**
     * Render the label and input field as inline elements.
     */
    this.inline = false;
    /**
     * When `true` value must be provided before submitting.
     */
    this.required = false;
    /**
     * Indicate that this is a controlled input, preventing user editing of the value
     */
    this.readOnly = false;
    /**
     * Text value of the input.
     */
    this.value = '';
  }
  render() {
    var _a;
    const _type = this.type === 'number'
      ? {
        type: 'text',
        inputmode: 'numeric',
        pattern: '[0-9]*',
      }
      : { type: this.type };
    const _label = this.label === undefined || this.hideLabel
      ? {
        'aria-label': (_a = this.label) !== null && _a !== void 0 ? _a : this.name,
      }
      : { 'aria-labelledby': `${this.name}-label` };
    return (index.h(index.Host, { class: { inline: this.inline } }, this.iconStart !== undefined && (index.h("stencila-icon", { icon: this.iconStart })), index.h("input", Object.assign({}, _type, _label, {
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus: this.autoFocus, inputmode: this.inputmode, name: this.name, placeholder: this.placeholder, required: this.required, value: this.value, readOnly: this.readOnly
    }))));
  }
};
Input.style = {
  default: defaultInputCss,
  material: inputMaterialCss
};

exports.stencila_input = Input;

//# sourceMappingURL=stencila-input.cjs.entry.js.map