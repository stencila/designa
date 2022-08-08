import { FunctionalComponent, h } from '@stencil/core'
import { ValidatorTypes } from '../types'
import { BooleanValidator } from './booleanValidator'
import { ConstantValidator } from './constantValidator'
import { IntegerValidator } from './integerValidator'
import { NumberValidator } from './numberValidator'
import { StringValidator } from './stringValidator'

interface Props {
  onValidatorChange: (e: Event) => void
  type?: ValidatorTypes
  valueElRef?: Element
}

const validateField = (e: Event) => {
  const target = e.target as HTMLSelectElement | HTMLInputElement
  target.reportValidity()
}

const getValidator =
  (valueElRef?: Element) => (validatorType: Props['type']) => {
    switch (validatorType) {
      case 'NumberValidator': {
        return <NumberValidator valueEl={valueElRef}></NumberValidator>
      }
      case 'IntegerValidator': {
        return <IntegerValidator valueEl={valueElRef}></IntegerValidator>
      }
      case 'StringValidator': {
        return <StringValidator valueEl={valueElRef}></StringValidator>
      }
      case 'ConstantValidator': {
        return <ConstantValidator valueEl={valueElRef}></ConstantValidator>
      }
      case 'BooleanValidator': {
        return <BooleanValidator valueEl={valueElRef}></BooleanValidator>
      }
    }
  }

export const Validator = (props: Props): FunctionalComponent => {
  return (
    <stencila-menu autoClose={false} menuPosition="bottom-start">
      <stencila-button
        iconOnly={true}
        icon="equalizer"
        size="xsmall"
        slot="toggle"
        aria-label="Toggle menu"
        color="key"
        minimal={true}
      ></stencila-button>

      <form
        onChange={props.onValidatorChange}
        onInput={validateField}
        onFocusin={validateField}
      >
        <label>
          Type
          <select name="validator">
            <option disabled selected={props.type === undefined}>
              Select…
            </option>
            <option
              value="BooleanValidator"
              selected={props.type === 'BooleanValidator'}
            >
              Boolean
            </option>
            <option
              value="IntegerValidator"
              selected={props.type === 'IntegerValidator'}
            >
              Integer
            </option>
            <option
              value="NumberValidator"
              selected={props.type === 'NumberValidator'}
            >
              Number
            </option>
            <option
              value="StringValidator"
              selected={props.type === 'StringValidator'}
            >
              String
            </option>
            <option
              value="EnumValidator"
              selected={props.type === 'EnumValidator'}
            >
              Enum
            </option>
          </select>
        </label>

        {getValidator(props.valueElRef)(props.type)}
      </form>
    </stencila-menu>
  )
}
