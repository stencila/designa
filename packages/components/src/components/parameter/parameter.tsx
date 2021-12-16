import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
} from '@stencil/core'
import { getInputValue } from '../utils/input'
import { getSlotByName } from '../utils/slotSelectors'
import { isValidatorType, ValidatorTypes } from './types'
import { Validator } from './validators'

/**
 * Stencila Parameter component
 *
 * @slot name - The name of the parameter
 * @slot value - The current value of the parameter
 */
@Component({
  tag: 'stencila-parameter',
  styleUrls: {
    default: 'parameter.css',
    material: 'parameter.css',
  },
  scoped: true,
})
export class Parameter {
  @Element() el: HTMLStencilaParameterElement

  private labelSlotRef: Element | undefined = undefined
  private valueSlotRef: Element | undefined = undefined

  /**
   * The context of the component. In `read` mode the parameter validator and its
   * properties cannot be edited.
   */
  @Prop({ reflect: true }) mode: 'read' | 'edit' = 'edit'

  /**
   * The Stencila `Validator` Schema with which to configure and validate the parameter.
   */
  @Prop({ mutable: true }) validator?: ValidatorTypes

  @State() paramName: string = ''

  /**
   * Event emitted when either the name of value of the parameter changes.
   * You can use the `type` property of the event detail to determine the type
   * of change, it will be either `value` or `name`.
   */
  @Event({
    eventName: 'stencila-parameter-change',
  })
  public parameterChange: EventEmitter

  private onParamChange = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement | HTMLSelectElement
    const isValid = this.validateValue(target)
    if (isValid) {
      this.parameterChange.emit({
        property: 'value',
        value: getInputValue(target),
      })
    }
  }

  private onParamNameChange = (e: Event) => {
    const target = e.currentTarget as HTMLSpanElement
    this.parameterChange.emit({
      property: 'name',
      value: target.textContent,
    })
  }

  /**
   * Event emitted when either the type or property of the parameter validator
   * changes.
   * You can use the `type` property of the event detail to determine the type
   * of change, it will be either `validator` or `property`.
   */
  @Event({
    eventName: 'stencila-validator-change',
  })
  public validatorChange: EventEmitter

  onValidatorChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement
    const value = getInputValue(target)

    if (
      target.name === 'validator' &&
      typeof value === 'string' &&
      target.value !== this.validator &&
      isValidatorType(value)
    ) {
      this.validator = value

      this.validatorChange.emit({
        type: 'validator',
        value,
      })
    } else {
      this.validatorChange.emit({
        type: 'property',
        name: target.name,
        value,
      })
    }
  }

  private validateValue = (target: HTMLInputElement | HTMLSelectElement) => {
    return target.reportValidity()
  }

  private getValidatorFromMetaEl = (): ValidatorTypes | undefined => {
    const validatorMetaEl = this.el.querySelector('meta[itemprop="validator"]')
    const validatorAttrParts =
      validatorMetaEl?.getAttribute('itemtype')?.split('/') ?? []

    const validatorAttr = validatorAttrParts[validatorAttrParts.length - 1]

    return validatorAttr && isValidatorType(validatorAttr)
      ? validatorAttr
      : undefined
  }

  componentWillLoad() {
    if (!this.validator) {
      this.validator = this.getValidatorFromMetaEl()
    }

    this.labelSlotRef = getSlotByName(this.el)('name')[0]

    const valueEl = getSlotByName(this.el)('value')
    this.valueSlotRef = valueEl[0]
    for (const input of valueEl) {
      input.addEventListener('input', this.onParamChange)
      input.addEventListener('focus', this.onParamChange)
    }
  }

  disconnectedCallback() {
    const valueEl = getSlotByName(this.el)('value')
    for (const input of valueEl) {
      input.removeEventListener('input', this.onParamChange)
      input.removeEventListener('focus', this.onParamChange)
    }
  }

  public render() {
    let labelText = this.labelSlotRef?.textContent ?? 'parameter'

    return (
      <Host>
        <span class="actions">
          {this.mode === 'edit' && (
            <Validator
              type={this.validator}
              onValidatorChange={this.onValidatorChange}
              valueElRef={this.valueSlotRef}
            ></Validator>
          )}

          <span
            class="name"
            contenteditable={this.mode === 'edit'}
            onClick={(e) => {
              if (this.mode === 'edit') {
                e.preventDefault()
              }
            }}
            onInput={this.onParamNameChange}
            ref={(el) => (this.labelSlotRef = el)}
          >
            <slot name="name" />
          </span>
        </span>

        <form class="value" title={labelText}>
          <slot name="value" />
        </form>
      </Host>
    )
  }
}
