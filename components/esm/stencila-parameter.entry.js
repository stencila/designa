import { h, F as Fragment, r as registerInstance, f as createEvent, e as Host, c as getElement } from './index-2305c23c.js';
import { g as getSlotByName } from './slotSelectors-df70e421.js';

const getInputValue = (input) => {
  if (input instanceof HTMLInputElement) {
    if (input.type === 'checkbox') {
      return input.checked;
    }
    else if (input.type === 'number') {
      return Number.parseFloat(input.value);
    }
    else {
      return input.value;
    }
  }
  if (input instanceof HTMLSelectElement) {
    return input.value;
  }
};

const isValidatorType = (maybeValidator) => {
  return (maybeValidator === 'Validator' ||
    maybeValidator === 'ArrayValidator' ||
    maybeValidator === 'BooleanValidator' ||
    maybeValidator === 'ConstantValidator' ||
    maybeValidator === 'EnumValidator' ||
    maybeValidator === 'IntegerValidator' ||
    maybeValidator === 'NumberValidator' ||
    maybeValidator === 'StringValidator' ||
    maybeValidator === 'TupleValidator');
};

const getProperties$3 = (valueEl) => {
  var _a, _b;
  return {
    default: (_b = (_a = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('placeholder')) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : undefined,
  };
};
const BooleanValidator = ({ valueEl, }) => {
  const values = getProperties$3(valueEl);
  return (h(Fragment, null,
    h("label", null,
      "Default value",
      h("input", { type: "checkbox", name: "default", checked: values.default === 'true' }))));
};

const ConstantValidator = () => {
  return (h(Fragment, null,
    h("label", null,
      "Value",
      h("input", { name: "value" }))));
};

const getProperties$2 = (valueEl) => {
  var _a, _b, _c, _d;
  return {
    default: (_b = (_a = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('placeholder')) !== null && _a !== void 0 ? _a : valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('value')) !== null && _b !== void 0 ? _b : undefined,
    minimum: (_c = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('min')) !== null && _c !== void 0 ? _c : undefined,
    maximum: (_d = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('max')) !== null && _d !== void 0 ? _d : undefined,
  };
};
const IntegerValidator = ({ valueEl, }) => {
  const values = getProperties$2(valueEl);
  return (h(Fragment, null,
    h("label", null,
      "Default value",
      h("input", { type: "number", name: "default", step: "1", value: values.default })),
    h("label", null,
      "Minimum",
      h("input", { type: "number", name: "minimum", step: "1", value: values.minimum })),
    h("label", null,
      "Maximum",
      h("input", { type: "number", name: "maximum", step: "1", value: values.maximum }))));
};

const getProperties$1 = (valueEl) => {
  var _a, _b, _c, _d;
  return {
    default: (_b = (_a = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('placeholder')) !== null && _a !== void 0 ? _a : valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('value')) !== null && _b !== void 0 ? _b : undefined,
    minimum: (_c = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('min')) !== null && _c !== void 0 ? _c : undefined,
    maximum: (_d = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('max')) !== null && _d !== void 0 ? _d : undefined,
  };
};
const NumberValidator = ({ valueEl, }) => {
  const values = getProperties$1(valueEl);
  return (h(Fragment, null,
    h("label", null,
      "Default value",
      h("input", { type: "number", name: "default", step: "any", value: values.default })),
    h("label", null,
      "Minimum",
      h("input", { type: "number", name: "minimum", step: "any", value: values.minimum })),
    h("label", null,
      "Maximum",
      h("input", { type: "number", name: "maximum", step: "any", value: values.maximum }))));
};

const getProperties = (valueEl) => {
  var _a, _b, _c, _d;
  return {
    default: (_a = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('placeholder')) !== null && _a !== void 0 ? _a : undefined,
    minLength: (_b = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('minLength')) !== null && _b !== void 0 ? _b : undefined,
    maxLength: (_c = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('maxLength')) !== null && _c !== void 0 ? _c : undefined,
    pattern: (_d = valueEl === null || valueEl === void 0 ? void 0 : valueEl.getAttribute('pattern')) !== null && _d !== void 0 ? _d : undefined,
  };
};
const StringValidator = ({ valueEl, }) => {
  const values = getProperties(valueEl);
  return (h(Fragment, null,
    h("label", null,
      "Default value",
      h("input", { type: "text", name: "default", value: values.default })),
    h("label", null,
      "Minimum length",
      h("input", { type: "number", step: "1", name: "minLength", value: values.minLength, min: "0" })),
    h("label", null,
      "Maximum length",
      h("input", { type: "number", step: "1", name: "maxLength", value: values.maxLength })),
    h("label", null,
      "Pattern (RegEx)",
      h("input", { type: "text", name: "pattern", value: values.pattern }))));
};

const validateField = (e) => {
  const target = e.target;
  target.reportValidity();
};
const getValidator = (valueElRef) => (validatorType) => {
  switch (validatorType) {
    case 'NumberValidator': {
      return h(NumberValidator, { valueEl: valueElRef });
    }
    case 'IntegerValidator': {
      return h(IntegerValidator, { valueEl: valueElRef });
    }
    case 'StringValidator': {
      return h(StringValidator, { valueEl: valueElRef });
    }
    case 'ConstantValidator': {
      return h(ConstantValidator, { valueEl: valueElRef });
    }
    case 'BooleanValidator': {
      return h(BooleanValidator, { valueEl: valueElRef });
    }
  }
};
const Validator = (props) => {
  return (h("stencila-menu", { autoClose: false, menuPosition: "bottom-start" },
    h("stencila-button", { iconOnly: true, icon: "equalizer", size: "xsmall", slot: "toggle", "aria-label": "Toggle menu", color: "key", minimal: true }),
    h("form", { onChange: props.onValidatorChange, onInput: validateField, onFocusin: validateField },
      h("label", null,
        "Type",
        h("select", { name: "validator" },
          h("option", { disabled: true, selected: props.type === undefined }, "Select\u2026"),
          h("option", { value: "BooleanValidator", selected: props.type === 'BooleanValidator' }, "Boolean"),
          h("option", { value: "IntegerValidator", selected: props.type === 'IntegerValidator' }, "Integer"),
          h("option", { value: "NumberValidator", selected: props.type === 'NumberValidator' }, "Number"),
          h("option", { value: "StringValidator", selected: props.type === 'StringValidator' }, "String"),
          h("option", { value: "EnumValidator", selected: props.type === 'EnumValidator' }, "Enum"))),
      getValidator(props.valueElRef)(props.type))));
};

const defaultParameterCss = ".sc-stencila-parameter-default-h,stencila-parameter.sc-stencila-parameter-default{--background:var(--color-stock,#fff);--background-buttons:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);background-color:var(--background);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:-ms-inline-flexbox;display:inline-flex;font-size:.875rem;line-height:1.25rem;line-height:1;padding:0;vertical-align:text-bottom;white-space:nowrap}.sc-stencila-parameter-default-h .actions.sc-stencila-parameter-default,stencila-parameter.sc-stencila-parameter-default .actions.sc-stencila-parameter-default{background-color:var(--background-buttons);cursor:default;display:inline-block;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);width:0}[mode=edit].hover.sc-stencila-parameter-default-h .actions.sc-stencila-parameter-default,[mode=edit].sc-stencila-parameter-default-h:focus .actions.sc-stencila-parameter-default,[mode=edit].sc-stencila-parameter-default-h:focus-within .actions.sc-stencila-parameter-default,[mode=edit].sc-stencila-parameter-default-h:hover .actions.sc-stencila-parameter-default,stencila-parameter[mode=edit].hover.sc-stencila-parameter-default .actions.sc-stencila-parameter-default,stencila-parameter[mode=edit].sc-stencila-parameter-default:focus .actions.sc-stencila-parameter-default,stencila-parameter[mode=edit].sc-stencila-parameter-default:focus-within .actions.sc-stencila-parameter-default,stencila-parameter[mode=edit].sc-stencila-parameter-default:hover .actions.sc-stencila-parameter-default{display:-ms-inline-flexbox;display:inline-flex;max-width:100%;width:100%}.sc-stencila-parameter-default-h .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default,stencila-parameter.sc-stencila-parameter-default .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:.5rem}.sc-stencila-parameter-default-h .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default label.sc-stencila-parameter-default,stencila-parameter.sc-stencila-parameter-default .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default label.sc-stencila-parameter-default{color:var(--color-neutral-600);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.75rem;line-height:1rem}.sc-stencila-parameter-default-h .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default label.sc-stencila-parameter-default:not(:first-of-type),stencila-parameter.sc-stencila-parameter-default .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default label.sc-stencila-parameter-default:not(:first-of-type){margin-top:.5rem}.sc-stencila-parameter-default-h .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default label.sc-stencila-parameter-default input.sc-stencila-parameter-default,.sc-stencila-parameter-default-h .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default label.sc-stencila-parameter-default select.sc-stencila-parameter-default,stencila-parameter.sc-stencila-parameter-default .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default label.sc-stencila-parameter-default input.sc-stencila-parameter-default,stencila-parameter.sc-stencila-parameter-default .actions.sc-stencila-parameter-default form.sc-stencila-parameter-default label.sc-stencila-parameter-default select.sc-stencila-parameter-default{border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.875rem;line-height:1.25rem;margin-top:.25rem;width:100%}.sc-stencila-parameter-default-h .name.sc-stencila-parameter-default,stencila-parameter.sc-stencila-parameter-default .name.sc-stencila-parameter-default{background-color:var(--background-buttons);cursor:text;font-family:monospace;font-family:var(--font-family-mono,monospace);padding:.25rem}.sc-stencila-parameter-default-h .name.sc-stencila-parameter-default-s>label,stencila-parameter .name.sc-stencila-parameter-default-s>label{cursor:text}.sc-stencila-parameter-default-h .value.sc-stencila-parameter-default,stencila-parameter.sc-stencila-parameter-default .value.sc-stencila-parameter-default{background-color:var(--background);font-family:monospace;font-family:var(--font-family-mono,monospace);margin:0;padding:0 .25rem}.sc-stencila-parameter-default-h .value.sc-stencila-parameter-default-s>input,.sc-stencila-parameter-default-h .value.sc-stencila-parameter-default-s>select,stencila-parameter .value.sc-stencila-parameter-default-s>input,stencila-parameter .value.sc-stencila-parameter-default-s>select{border-width:0;display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace)}.sc-stencila-parameter-default-h .sc-stencila-parameter-default-s>input,.sc-stencila-parameter-default-h input.sc-stencila-parameter-default,stencila-parameter.sc-stencila-parameter-default-s>input,stencila-parameter .sc-stencila-parameter-default-s>input,stencila-parameter.sc-stencila-parameter-default input.sc-stencila-parameter-default{min-width:4rem}.sc-stencila-parameter-default-h .sc-stencila-parameter-default-s>input:invalid,.sc-stencila-parameter-default-h input.sc-stencila-parameter-default:invalid,stencila-parameter.sc-stencila-parameter-default-s>input:invalid,stencila-parameter .sc-stencila-parameter-default-s>input:invalid,stencila-parameter.sc-stencila-parameter-default input.sc-stencila-parameter-default:invalid{border-radius:.25rem;-webkit-box-shadow:0 0 0 2px var(--color-danger-500);box-shadow:0 0 0 2px var(--color-danger-500)}";

const materialParameterCss = ".sc-stencila-parameter-material-h,stencila-parameter.sc-stencila-parameter-material{--background:var(--color-stock,#fff);--background-buttons:var(--color-neutral-50,#edf2f7);--border:var(--color-neutral-100,#e2e8f0);background-color:var(--background);border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;color:#4a4a4a;color:var(--color-key,#4a4a4a);display:-ms-inline-flexbox;display:inline-flex;font-size:.875rem;line-height:1.25rem;line-height:1;padding:0;vertical-align:text-bottom;white-space:nowrap}.sc-stencila-parameter-material-h .actions.sc-stencila-parameter-material,stencila-parameter.sc-stencila-parameter-material .actions.sc-stencila-parameter-material{background-color:var(--background-buttons);cursor:default;display:inline-block;overflow:hidden;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,fill,stroke,opacity,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-box-shadow,-webkit-transform,-webkit-filter,-webkit-backdrop-filter;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);width:0}[mode=edit].hover.sc-stencila-parameter-material-h .actions.sc-stencila-parameter-material,[mode=edit].sc-stencila-parameter-material-h:focus .actions.sc-stencila-parameter-material,[mode=edit].sc-stencila-parameter-material-h:focus-within .actions.sc-stencila-parameter-material,[mode=edit].sc-stencila-parameter-material-h:hover .actions.sc-stencila-parameter-material,stencila-parameter[mode=edit].hover.sc-stencila-parameter-material .actions.sc-stencila-parameter-material,stencila-parameter[mode=edit].sc-stencila-parameter-material:focus .actions.sc-stencila-parameter-material,stencila-parameter[mode=edit].sc-stencila-parameter-material:focus-within .actions.sc-stencila-parameter-material,stencila-parameter[mode=edit].sc-stencila-parameter-material:hover .actions.sc-stencila-parameter-material{display:-ms-inline-flexbox;display:inline-flex;max-width:100%;width:100%}.sc-stencila-parameter-material-h .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material,stencila-parameter.sc-stencila-parameter-material .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:.5rem}.sc-stencila-parameter-material-h .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material label.sc-stencila-parameter-material,stencila-parameter.sc-stencila-parameter-material .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material label.sc-stencila-parameter-material{color:var(--color-neutral-600);display:block;font-family:sans-serif;font-family:var(--font-family-body,sans-serif);font-size:.75rem;line-height:1rem}.sc-stencila-parameter-material-h .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material label.sc-stencila-parameter-material:not(:first-of-type),stencila-parameter.sc-stencila-parameter-material .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material label.sc-stencila-parameter-material:not(:first-of-type){margin-top:.5rem}.sc-stencila-parameter-material-h .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material label.sc-stencila-parameter-material input.sc-stencila-parameter-material,.sc-stencila-parameter-material-h .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material label.sc-stencila-parameter-material select.sc-stencila-parameter-material,stencila-parameter.sc-stencila-parameter-material .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material label.sc-stencila-parameter-material input.sc-stencila-parameter-material,stencila-parameter.sc-stencila-parameter-material .actions.sc-stencila-parameter-material form.sc-stencila-parameter-material label.sc-stencila-parameter-material select.sc-stencila-parameter-material{border-color:var(--border);border-radius:.25rem;border-style:solid;border-width:1px;display:block;font-family:monospace;font-family:var(--font-family-mono,monospace);font-size:.875rem;line-height:1.25rem;margin-top:.25rem;width:100%}.sc-stencila-parameter-material-h .name.sc-stencila-parameter-material,stencila-parameter.sc-stencila-parameter-material .name.sc-stencila-parameter-material{background-color:var(--background-buttons);cursor:text;font-family:monospace;font-family:var(--font-family-mono,monospace);padding:.25rem}.sc-stencila-parameter-material-h .name.sc-stencila-parameter-material-s>label,stencila-parameter .name.sc-stencila-parameter-material-s>label{cursor:text}.sc-stencila-parameter-material-h .value.sc-stencila-parameter-material,stencila-parameter.sc-stencila-parameter-material .value.sc-stencila-parameter-material{background-color:var(--background);font-family:monospace;font-family:var(--font-family-mono,monospace);margin:0;padding:0 .25rem}.sc-stencila-parameter-material-h .value.sc-stencila-parameter-material-s>input,.sc-stencila-parameter-material-h .value.sc-stencila-parameter-material-s>select,stencila-parameter .value.sc-stencila-parameter-material-s>input,stencila-parameter .value.sc-stencila-parameter-material-s>select{border-width:0;display:inline-block;font-family:monospace;font-family:var(--font-family-mono,monospace)}.sc-stencila-parameter-material-h .sc-stencila-parameter-material-s>input,.sc-stencila-parameter-material-h input.sc-stencila-parameter-material,stencila-parameter.sc-stencila-parameter-material-s>input,stencila-parameter .sc-stencila-parameter-material-s>input,stencila-parameter.sc-stencila-parameter-material input.sc-stencila-parameter-material{min-width:4rem}.sc-stencila-parameter-material-h .sc-stencila-parameter-material-s>input:invalid,.sc-stencila-parameter-material-h input.sc-stencila-parameter-material:invalid,stencila-parameter.sc-stencila-parameter-material-s>input:invalid,stencila-parameter .sc-stencila-parameter-material-s>input:invalid,stencila-parameter.sc-stencila-parameter-material input.sc-stencila-parameter-material:invalid{border-radius:.25rem;-webkit-box-shadow:0 0 0 2px var(--color-danger-500);box-shadow:0 0 0 2px var(--color-danger-500)}";

const Parameter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.parameterChange = createEvent(this, "stencila-parameter-change", 7);
    this.validatorChange = createEvent(this, "stencila-validator-change", 7);
    this.labelSlotRef = undefined;
    this.valueSlotRef = undefined;
    /**
     * The context of the component. In `read` mode the parameter validator and its
     * properties cannot be edited.
     */
    this.mode = 'edit';
    this.paramName = '';
    this.onParamChange = (e) => {
      const target = e.currentTarget;
      const isValid = this.validateValue(target);
      if (isValid) {
        this.parameterChange.emit({
          property: 'value',
          value: getInputValue(target),
        });
      }
    };
    this.onParamNameChange = (e) => {
      const target = e.currentTarget;
      this.parameterChange.emit({
        property: 'name',
        value: target.textContent,
      });
    };
    this.onValidatorChange = (e) => {
      const target = e.target;
      const value = getInputValue(target);
      if (target.name === 'validator' &&
        typeof value === 'string' &&
        target.value !== this.validator &&
        isValidatorType(value)) {
        this.validator = value;
        this.validatorChange.emit({
          type: 'validator',
          value,
        });
      }
      else {
        this.validatorChange.emit({
          type: 'property',
          name: target.name,
          value,
        });
      }
    };
    this.validateValue = (target) => {
      return target.reportValidity();
    };
    this.getValidatorFromMetaEl = () => {
      var _a, _b;
      const validatorMetaEl = this.el.querySelector('meta[itemprop="validator"]');
      const validatorAttrParts = (_b = (_a = validatorMetaEl === null || validatorMetaEl === void 0 ? void 0 : validatorMetaEl.getAttribute('itemtype')) === null || _a === void 0 ? void 0 : _a.split('/')) !== null && _b !== void 0 ? _b : [];
      const validatorAttr = validatorAttrParts[validatorAttrParts.length - 1];
      return isValidatorType(validatorAttr) ? validatorAttr : undefined;
    };
  }
  componentWillLoad() {
    if (this.validator === undefined) {
      this.validator = this.getValidatorFromMetaEl();
    }
    this.labelSlotRef = getSlotByName(this.el)('name')[0];
    const valueEl = getSlotByName(this.el)('value');
    this.valueSlotRef = valueEl[0];
    for (const input of valueEl) {
      input.addEventListener('input', this.onParamChange);
      input.addEventListener('focus', this.onParamChange);
    }
  }
  disconnectedCallback() {
    const valueEl = getSlotByName(this.el)('value');
    for (const input of valueEl) {
      input.removeEventListener('input', this.onParamChange);
      input.removeEventListener('focus', this.onParamChange);
    }
  }
  render() {
    var _a, _b;
    const labelText = (_b = (_a = this.labelSlotRef) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : 'parameter';
    return (h(Host, null, h("span", { class: "actions" }, this.mode === 'edit' && (h(Validator, { type: this.validator, onValidatorChange: this.onValidatorChange, valueElRef: this.valueSlotRef })), h("span", { class: "name", contentEditable: this.mode === 'edit', onClick: (e) => {
        if (this.mode === 'edit') {
          e.preventDefault();
        }
      }, onInput: this.onParamNameChange, ref: (el) => (this.labelSlotRef = el) }, h("slot", { name: "name" }))), h("form", { class: "value", title: labelText }, h("slot", { name: "value" }))));
  }
  get el() { return getElement(this); }
};
Parameter.style = {
  default: defaultParameterCss,
  material: materialParameterCss
};

export { Parameter as stencila_parameter };

//# sourceMappingURL=stencila-parameter.entry.js.map