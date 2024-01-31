import { h } from '@stencil/core';
import { BooleanValidator } from './booleanValidator';
import { ConstantValidator } from './constantValidator';
import { IntegerValidator } from './integerValidator';
import { NumberValidator } from './numberValidator';
import { StringValidator } from './stringValidator';
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
export const Validator = (props) => {
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
//# sourceMappingURL=index.js.map