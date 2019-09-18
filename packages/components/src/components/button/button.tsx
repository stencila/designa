import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'stencila-button',
  styleUrls: {
    default: 'button.css',
    material: 'button.material.css'
  },
  shadow: true
})
export class Button {
  public static readonly elementName = 'stencila-button'

  public static slots = {
    default: undefined,
    icon: 'icon'
  }

  /**
   * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
   */
  @Prop() public href?: string

  /**
   * The displayed text of the Button.
   */
  @Prop() public label: string

  /**
   * The displayed text of the Button.
   */
  @Prop() public size: 'xsmall' | 'small' | 'default' | 'large'

  /**
   * The displayed text of the Tab.
   */
  @Prop() public isSecondary: boolean = false

  /**
   * The type of button to render, options correspond to HTML Button `type` attribute.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
   */
  @Prop() public buttonType: 'button' | 'submit' | 'reset'

  /**
   * If true, prevents the user from interacting with the button.
   */
  @Prop() public disabled: boolean = false

  public render() {
    const TagType = this.href != null ? 'a' : 'button' // eslint-disable-line @typescript-eslint/no-unused-vars

    return (
      <TagType
        href={this.href}
        type={this.buttonType}
        data-size={this.size}
        disabled={this.disabled}
        class={{
          secondary: this.isSecondary,
          [this.size]: this.size !== undefined
        }}
      >
        <slot name={Button.slots.icon} />
        <slot name={Button.slots.default} />
      </TagType>
    )
  }
}
