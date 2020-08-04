import { Component, h, Host, Prop } from '@stencil/core'

@Component({
  tag: 'stencila-code-error',
  styleUrls: {
    default: 'error.css',
    material: 'error.css',
  },
  scoped: true,
})
export class Error {
  /* public static readonly elementName = 'stencila-code-error' */

  /**
   * Determines whether the stacktrace is visible or not
   */
  @Prop() open = false

  /**
   * The severity of the error message
   */
  @Prop() kind: 'incapable' | 'warning' | 'error' = 'warning'

  /**
   * The severity of the error message
   */
  @Prop() hasStacktrace: boolean

  public render() {
    return (
      <Host kind={this.kind}>
        <div class="overview">
          <stencila-icon icon="alert"></stencila-icon>
          <slot />
        </div>

        {this.hasStacktrace && (
          <stencila-details>
            <span slot="summary">Vew the stacktrace</span>
            <slot name="stacktrace" />
          </stencila-details>
        )}
      </Host>
    )
  }
}
