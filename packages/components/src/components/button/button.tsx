import { Component, h, Prop, State } from '@stencil/core'
import { IconNames } from '../icon/icon'

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
    default: undefined
  }

  /**
   * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
   */
  @Prop() public href?: string

  /**
   * Screen-reader accessible label to read out.
   */
  @Prop() public ariaLabel: string

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
   * Only applies if the button is not an anchor link.
   */
  @Prop() public buttonType: 'button' | 'submit' | 'reset'

  /**
   * If true, prevents the user from interacting with the button.
   */
  @Prop() public disabled: boolean = false

  /**
   * Name of the icon to render inside the button
   * @see Icon component for possible values
   */
  @Prop() public icon: IconNames

  /**
   * If true, removes extra padding from Icon inside the button
   * TODO: See if we can automatically infer removal of padding through CSS
   */
  @Prop() public iconOnly: boolean

  /**
   * If true, disables the button, shows a loading icon, and prevents the click handler from firing
   */
  @Prop() public isLoading: boolean = false

  /**
   * State keeping track of when
   */
  @State() private ioPending: boolean = false

  /**
   * Function to be called when clicking the button.
   * Passed function will be wrapped in a Promise, and the result returned.
   */
  @Prop({
    attribute: 'clickHandler'
  })
  public clickHandlerProp: (e?: MouseEvent) => unknown

  private onClick = async (e?: MouseEvent): Promise<unknown> => {
    this.ioPending = true
    const result = await Promise.resolve(this.clickHandlerProp(e))
    this.ioPending = false
    return result
  }

  public render() {
    const TagType = this.href != null ? 'a' : 'button'

    return (
      <TagType
        href={this.href}
        type={this.buttonType}
        data-size={this.size}
        disabled={this.ioPending || this.isLoading || this.disabled}
        aria-label={this.ariaLabel}
        onClick={this.clickHandlerProp && this.onClick}
        class={{
          secondary: this.isSecondary,
          iconOnly: this.iconOnly,
          [this.size]: this.size !== undefined
        }}
      >
        {this.icon === undefined ? null : typeof this.icon === 'string' ? (
          <stencila-icon
            icon={this.ioPending || this.isLoading ? 'loader' : this.icon}
          ></stencila-icon>
        ) : (
          this.icon
        )}

        <slot name={Button.slots.default} />
      </TagType>
    )
  }
}
