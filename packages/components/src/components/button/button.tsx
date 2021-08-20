import { Component, h, Host, Prop } from '@stencil/core'
import { Colors } from '../../types'
import { IconNames } from '../icon/iconNames'

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
   * Relationship of the link
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#rel
   * Only applied if `href` prop is also set.
   */
  @Prop() public rel?: string

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
  @Prop() public color: Colors = 'primary'

  /**
   * The overall size of the Button.
   */
  @Prop() public size: 'xsmall' | 'small' | 'default' | 'large' = 'default'

  /**
   * Renders the button without initial background color or border.
   */
  @Prop() public minimal = false

  /**
   * Renders the button using a secondory, and usually less visually prominent, Button CSS stylesheet.
   */
  @Prop() public isSecondary = false

  /**
   * The type of button to render, options correspond to HTML Button `type` attribute.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
   * Only applies if the button is not an anchor link.
   */
  @Prop() public buttonType: 'button' | 'submit' | 'reset'

  /**
   * If true, prevents the user from interacting with the button.
   * Note: Not all browser prevent the click handler from firing on disabled buttons.
   */
  @Prop() public disabled = false

  /**
   * Name of the icon to render inside the button
   * @see Icon component for possible values
   */
  @Prop() public icon?: HTMLElement | IconNames

  /**
   * If true, removes extra padding from Icon inside the button
   * TODO: See if we can automatically infer removal of padding through CSS
   */
  @Prop() public iconOnly = false

  /**
   * If true, shows a loading spinner icon and sets a `disabled` attribute on the button.
   * Note: Not all browser prevent the click handler from firing on disabled buttons.
   */
  @Prop() public isLoading = false

  /**
   * If true, the button will take up the full width of the parent container
   */
  @Prop() public fill = false

  /**
   * An optional help text to display for button focus and hover states.
   */
  @Prop() public tooltip?: string

  /**
   * An optional data attribute set on the button element for easier targeting using JavaScript.
   */
  @Prop() public dataEl?: string

  private generateButton = (): HTMLButtonElement | HTMLAnchorElement => {
    const TagType = this.href === undefined ? 'button' : 'a'
    const elAttrs =
      TagType === 'button'
        ? { type: this.buttonType }
        : { href: this.href, rel: this.rel, target: this.target }

    const extraAttrs: Record<string, string> = {}
    if (this.dataEl !== undefined) {
      extraAttrs['data-el'] = this.dataEl
    }

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
        {...elAttrs}
        {...extraAttrs}
        disabled={this.isLoading || this.disabled || false}
        aria-label={this.ariaLabel ?? this.tooltip}
      >
        {typeof this.icon === 'string' ? (
          <stencila-icon
            icon={this.isLoading ? 'loader-2' : this.icon}
            class={{ spin: this.isLoading }}
          ></stencila-icon>
        ) : (
          this.icon
        )}
        <slot name="icon" />

        <span class="label">
          <slot />
        </span>
      </TagType>
    )
  }

  public render() {
    return (
      <Host size={this.size} icon={this.icon}>
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
