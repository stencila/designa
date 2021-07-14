import { Component, Element, h, Host, Prop } from '@stencil/core'
import { IconNames } from '../icon/iconNames'
import { getSlotByName } from '../utils/slotSelectors'
import { ToastPosition, ToastType, ToastTypes } from './toastController'

/*
 * Individual Toast component.
 * To present on the page see `./toastController.ts`
 */
@Component({
  tag: 'stencila-toast',
  styleUrls: {
    default: 'toast.css',
    material: 'toast.css',
  },
})
export class StencilaToast {
  @Element()
  private el: HTMLStencilaToastElement | null

  private timeout: number

  /**
   * If true, shows a "close" button to immediately dismiss the toast
   */
  @Prop() dismissable? = false

  /**
   * Duration in milliseconds for how long the toast should be display
   * Setting `duration` to `0` will disable auto-dismissal of the toast.
   */
  @Prop() duration? = 4_000

  /**
   * Type of the toast to show. Affects the component colour scheme.
   */
  @Prop() type: ToastType = ToastTypes.info

  /**
   * Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance.
   */
  @Prop() position: ToastPosition | undefined

  private getIconByType = (): IconNames => {
    switch (this.type) {
      case 'success': {
        return 'checkbox-circle'
      }
      case 'danger': {
        return 'forbid'
      }
      case 'warn': {
        return 'error-warning'
      }
      case 'info':
      default: {
        return 'question'
      }
    }
  }

  private dismiss = () => {
    window.clearTimeout(this.timeout)
    this.el?.parentElement?.removeChild(this.el)
  }

  private pauseAutoDismiss = () => {
    window.clearTimeout(this.timeout)
  }

  private autoDismiss = () => {
    if (this.duration !== undefined && this.duration <= 0) {
      return
    }

    window.clearTimeout(this.timeout)

    this.timeout = window.setTimeout(() => {
      this.dismiss()
    }, this.duration)
  }

  private styleActionButtons = () => {
    const buttons = Array.from(
      getSlotByName(this.el)('actions')?.children ?? []
    ).filter(
      (el) =>
        el.tagName.toLowerCase() === 'stencila-button' &&
        !el.classList.contains('closeButton')
    )

    buttons.map((el, idx) => {
      el.setAttribute('size', 'xsmall')

      if (idx === 0) {
        el.setAttribute('color', this.type)
      }

      if (idx > 0) {
        el.setAttribute('color', 'neutral')
        el.setAttribute('minimal', 'minimal')
      }
    })
  }

  componentWillLoad() {
    this.styleActionButtons()
  }

  componentDidLoad() {
    this.autoDismiss()
  }

  render() {
    return (
      <Host
        type={this.type}
        position={this.position}
        dismissable={this.dismissable}
        onMouseEnter={this.pauseAutoDismiss}
        onMouseLeave={this.autoDismiss}
      >
        <div class="toastAccent">
          <stencila-icon
            icon={this.getIconByType()}
            iconStyle="fill"
          ></stencila-icon>
        </div>

        <div class="content">
          <slot name="title"></slot>

          <slot></slot>

          <slot name="actions"></slot>
        </div>

        {(this.dismissable || this.duration === 0) && (
          <stencila-button
            color="neutral"
            iconOnly={true}
            icon="close"
            minimal={true}
            size="small"
            onClick={this.dismiss}
            class="closeButton"
          ></stencila-button>
        )}
      </Host>
    )
  }
}
