import { Component, Element, h, Host, Prop } from '@stencil/core'
import { ToastPosition, ToastType, ToastTypes } from './toastController'

/*
 * Individual Toast component. To present on the page see `./toastController.ts`
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

  // TODO: Pause Toast removal if user hovers/interacts with the notification

  /**
   * Duration in milliseconds for how long the toast should be display
   */
  @Prop() duration = 4000

  /**
   * Type of the toast to show. Affects the component color scheme.
   */
  @Prop() type: ToastType = ToastTypes.info

  /**
   * Where on the screen to show the Toast. Overrides the base position set in the `ToastController` instance.
   */
  @Prop() position: ToastPosition | undefined

  componentDidLoad() {
    window.setTimeout(() => {
      if (this.el) {
        this.el.parentElement?.removeChild(this.el)
      }
    }, this.duration)
  }

  render() {
    return (
      <Host type={this.type} position={this.position}>
        <slot></slot>
      </Host>
    )
  }
}
