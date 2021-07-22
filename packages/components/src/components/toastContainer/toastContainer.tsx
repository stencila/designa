import { Component, h, Host, Prop } from '@stencil/core'
import { ToastPosition, ToastPositions } from '../toast/toastController'

/*
 * Target container for `stencila-toast` elements.
 * Only one `stencila-toast-container` element should be present on the page.
 */
@Component({
  tag: 'stencila-toast-container',
})
export class StencilaToastContainer {
  /**
   * Default position of Toasts on the screen.
   * Can be overridden by individual Toast instances.
   */
  @Prop() position: ToastPosition = ToastPositions.topCenter

  render() {
    return (
      <Host class="stencila-toast-container" position={this.position}>
        <animate-presence
          aria-live="polite"
          role="status"
          // TODO: Look into `aria-relevant="additions"` not silencing node removals in VoiceOver
          aria-relevant="additions"
        >
          <slot />
        </animate-presence>
      </Host>
    )
  }
}
