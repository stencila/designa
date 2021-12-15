import { FunctionalComponent, h } from '@stencil/core'
import { ValidatorTypes } from '../types'
import { BooleanValidator } from './booleanValidator'
import { ConstantValidator } from './constantValidator'
import { IntegerValidator } from './integerValidator'
import { NumberValidator } from './numberValidator'
import { StringValidator } from './stringValidator'

interface Props {
  onValidatorChange: (e: Event) => void
  type: ValidatorTypes
}

const validateField = (e: Event) => {
  const target = e.target as HTMLSelectElement | HTMLInputElement
  target.reportValidity()
}

export const Validator = (props: Props): FunctionalComponent => {
  const getValidator = () => {
    switch (props.type) {
      case 'NumberValidator': {
        return <NumberValidator></NumberValidator>
      }
      case 'IntegerValidator': {
        return <IntegerValidator></IntegerValidator>
      }
      case 'StringValidator': {
        return <StringValidator></StringValidator>
      }
      case 'ConstantValidator': {
        return <ConstantValidator></ConstantValidator>
      }
      default: {
        return <BooleanValidator></BooleanValidator>
      }
    }
  }

  return (
    <stencila-menu autoClose={false} menuPosition="bottom-start">
      <stencila-button
        iconOnly={true}
        icon="toggle"
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
            <option
              value="ArrayValidatorr"
              selected={props.type === 'ArrayValidator'}
            >
              Array
            </option>
            <option
              value="BooleanValidator"
              selected={props.type === 'BooleanValidator'}
            >
              Boolean
            </option>
            <option
              value="ConstantValidator"
              selected={props.type === 'ConstantValidator'}
            >
              Constant
            </option>
            <option
              value="EnumValidator"
              selected={props.type === 'EnumValidator'}
            >
              Enum
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
              value="TupleValidator"
              selected={props.type === 'TupleValidator'}
            >
              Tuple
            </option>
          </select>
        </label>

        {getValidator()}
      </form>
    </stencila-menu>
  )
}
