import { Component, h, Host, Prop, State } from '@stencil/core'
import { IconNames } from '../icon/icon'

@Component({
  tag: 'stencila-button',
  styleUrls: {
    default: 'button.css',
    material: 'button.material.css',
  },
  scoped: true,
})
export class Button {
  public static readonly elementName = 'stencila-button'

  public static slots = {
    default: undefined,
  }

  /**
   * If an `href` property is provided, button will be rendered using an `<a>` anchor tag.
   */
  @Prop() public href?: string

  /**
   * Determines where to display the linked URL, options correspond to HTML Anchor `target` attribute.
   * Only applies if the button is an anchor link.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target
   */
  @Prop() public target?: HTMLAnchorElement['target']

  /**
   * Screen-reader accessible label to read out.
   */
  @Prop() public ariaLabel: string

  /**
   * The color of the button
   */
  @Prop() public color:
    | 'primary'
    | 'success'
    | 'warn'
    | 'danger'
    | 'neutral'
    | 'stock'
    | 'key'
    | 'brand' = 'primary'

  /**
   * The overall size of the Button.
   */
  @Prop() public size: 'xsmall' | 'small' | 'default' | 'large' = 'default'

  /**
   * Renders the button without initial background color or border.
   */
  @Prop() public minimal: boolean = false

  /**
   * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
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
  @Prop() public icon?: HTMLElement | IconNames

  /**
   * If true, removes extra padding from Icon inside the button
   * TODO: See if we can automatically infer removal of padding through CSS
   */
  @Prop() public iconOnly: boolean = false

  /**
   * If true, disables the button, shows a loading icon, and prevents the click handler from firing
   */
  @Prop() public isLoading: boolean = false

  /**
   * If true, the button will take up the full width of the parent container
   */
  @Prop() public fill: boolean = false

  /**
   * An optional help text to display for button focus and hover states.
   */
  @Prop() public tooltip?: string

  /**
   * State keeping track of when asynchronous action is in flight
   */
  @State() private ioPending: boolean = false

  /**
   * Function to be called when clicking the button.
   * Passed function will be wrapped in a Promise, and the result returned.
   */
  @Prop({
    attribute: 'clickHandler',
  })
  public clickHandlerProp: (e?: MouseEvent) => unknown

  private onClick = async (e?: MouseEvent): Promise<unknown> => {
    if (this.clickHandlerProp !== undefined) {
      this.ioPending = true
      const result = await Promise.resolve(this.clickHandlerProp(e))
      this.ioPending = false
      return result
    }

    return Promise.resolve()
  }

  generateButton = (): HTMLButtonElement | HTMLAnchorElement => {
    const TagType = this.href != null ? 'a' : 'button'

    return (
      <TagType
        class={{
          button: this.href !== undefined,
          fill: this.fill,
          iconOnly: this.iconOnly,
          minimal: this.minimal,
          secondary: this.isSecondary,
          [this.size]: this.size !== undefined,
          [`color-${this.color}`]: true,
        }}
        href={this.href}
        target={this.target}
        type={this.buttonType}
        disabled={this.ioPending || this.isLoading || this.disabled}
        aria-label={this.ariaLabel}
        onClick={this.onClick}
      >
        {this.icon === undefined ? null : typeof this.icon === 'string' ? (
          <stencila-icon
            icon={this.ioPending || this.isLoading ? 'loader' : this.icon}
            class={{ spin: this.isLoading }}
          ></stencila-icon>
        ) : (
          this.icon
        )}

        <slot />
      </TagType>
    )
  }

  public render() {
    return (
      <Host
        size={this.size}
        disabled={this.ioPending || this.isLoading || this.disabled}
      >
        {this.tooltip === undefined ? (
          this.generateButton()
        ) : (
          <stencila-tooltip text={this.tooltip}>
            {this.generateButton()}
          </stencila-tooltip>
        )}
      </Host>
    )
  }
}
