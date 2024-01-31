import { Component, Element, Event, h, Host, Prop, State, } from '@stencil/core';
import { getInputValue } from '../utils/input';
import { getSlotByName } from '../utils/slotSelectors';
import { isValidatorType } from './types';
import { Validator } from './validators';
/**
 * Stencila Parameter component
 *
 * @slot name - The name of the parameter
 * @slot value - The current value of the parameter
 */
export class Parameter {
  constructor() {
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
    return (h(Host, null,
      h("span", { class: "actions" },
        this.mode === 'edit' && (h(Validator, { type: this.validator, onValidatorChange: this.onValidatorChange, valueElRef: this.valueSlotRef })),
        h("span", { class: "name", contentEditable: this.mode === 'edit', onClick: (e) => {
            if (this.mode === 'edit') {
              e.preventDefault();
            }
          }, onInput: this.onParamNameChange, ref: (el) => (this.labelSlotRef = el) },
          h("slot", { name: "name" }))),
      h("form", { class: "value", title: labelText },
        h("slot", { name: "value" }))));
  }
  static get is() { return "stencila-parameter"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "default": ["parameter.css"],
    "material": ["parameter.css"]
  }; }
  static get styleUrls() { return {
    "default": ["parameter.css"],
    "material": ["parameter.css"]
  }; }
  static get properties() { return {
    "mode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'read' | 'edit'",
        "resolved": "\"edit\" | \"read\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The context of the component. In `read` mode the parameter validator and its\nproperties cannot be edited."
      },
      "attribute": "mode",
      "reflect": true,
      "defaultValue": "'edit'"
    },
    "validator": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "ValidatorTypes",
        "resolved": "\"ArrayValidator\" | \"BooleanValidator\" | \"ConstantValidator\" | \"EnumValidator\" | \"IntegerValidator\" | \"NumberValidator\" | \"StringValidator\" | \"TupleValidator\" | undefined",
        "references": {
          "ValidatorTypes": {
            "location": "import",
            "path": "./types"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The Stencila `Validator` Schema with which to configure and validate the parameter."
      },
      "attribute": "validator",
      "reflect": false
    }
  }; }
  static get states() { return {
    "paramName": {}
  }; }
  static get events() { return [{
      "method": "parameterChange",
      "name": "stencila-parameter-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when either the name of value of the parameter changes.\nYou can use the `type` property of the event detail to determine the type\nof change, it will be either `value` or `name`."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "validatorChange",
      "name": "stencila-validator-change",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Event emitted when either the type or property of the parameter validator\nchanges.\nYou can use the `type` property of the event detail to determine the type\nof change, it will be either `validator` or `property`."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=parameter.js.map