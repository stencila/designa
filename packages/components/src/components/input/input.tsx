import { Component, Host, h, Prop } from '@stencil/core'
import { IconNames } from '../icon/iconNames'

@Component({
  tag: 'stencila-input',
  styleUrls: {
    default: 'input.css',
    material: 'input.material.css',
  },
  scoped: true,
})
export class Input {
  /**
   * Automatically bring cursor focus to the input field on render.
   */
  @Prop() autoFocus = false

  /**
   * A hint to the browser for which keyboard to display.
   */
  @Prop() inputmode?:
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'

  /*
   * Type of input field.
   */
  @Prop() public type: 'text' | 'password' | 'number' | 'search' = 'text'

  /**
   * The name of the input, submitted as the value's label inside the form data.
   */
  @Prop() name!: string

  /**
   * Accessible text label for the input field. Defaults to the input's `name` prop.
   */
  @Prop() label?: string

  /**
   * Visually conceal the input label.
   * Use sparingly for simple forms only with a descriptive action button.
   */
  @Prop() hideLabel = false

  /**
   * Render the label and input field as inline elements.
   */
  @Prop() inline = false

  /*
   * Short hint demonstrating expected input value. Shown when the input is empty.
   */
  @Prop() public placeholder?: string

  /*
   * Icon to show at the start of the input field.
   */
  @Prop() public iconStart?: IconNames

  /**
   * When `true` value must be provided before submitting.
   */
  @Prop() required = false

  /**
   * Text value of the input.
   */
  @Prop() value?: number | string = ''

  public render() {
    const _type =
      this.type === 'number'
        ? {
            type: 'text',
            inputmode: 'numeric',
            pattern: '[0-9]*',
          }
        : { type: this.type }

    const _label =
      this.label === undefined || this.hideLabel
        ? {
            'aria-label': this.label ?? this.name,
          }
        : { 'aria-labelledby': `${this.name}-label` }

    return (
      <Host class={{ inline: this.inline }}>
        {this.iconStart && (
          <stencila-icon icon={this.iconStart}></stencila-icon>
        )}
        <input
          {..._type}
          {..._label}
          autoFocus={this.autoFocus}
          inputmode={this.inputmode}
          name={this.name}
          placeholder={this.placeholder}
          required={this.required}
          value={this.value}
        />
      </Host>
    )
  }
}
