import { Component, Element, h, Host, Prop, State } from '@stencil/core'
import { CodeError } from '@stencila/schema'
import { getSlotByName } from '../utils/slotSelectors'

export type Level = 'info' | 'warn' | 'error'

@Component({
  tag: 'stencila-code-error',
  styleUrls: {
    default: 'error.css',
    material: 'error.css',
  },
  scoped: true,
})
export class CodeErrorComponent {
  /**
   * The `CodeError` node
   */
  @Prop()
  error?: CodeError

  /**
   * The severity of the error message
   */
  @Prop({ mutable: true, reflect: true })
  level?: Level

  /**
   * Update the level, if not defined, based on the content of the `type` slot
   *
   * In the future, `CodeError` is likely to be replace with `CodeNotification` (or similar)
   * and `level` will be a property (so it does not need to be derived here)
   */
  private updateLevel() {
    if (this.level !== undefined) {
      return
    }

    const errorType = getSlotByName(this.el)(
      'type'
    )[0]?.textContent?.toLowerCase()

    if (typeof errorType === 'string' && errorType !== '') {
      this.level = errorType.includes('info')
        ? 'info'
        : errorType.includes('warn')
        ? 'warn'
        : 'error'
    } else {
      this.level = 'error'
    }
  }

  /**
   * Flag for whether there is a stack trace
   */
  @State()
  private hasStackTrace = false

  /**
   * Determine if the `stacktrace` slot has content
   */
  private updateHasStackTrace() {
    const stackTrace = getSlotByName(this.el)('stacktrace')[0]?.textContent
    this.hasStackTrace = typeof stackTrace === 'string' && stackTrace !== ''
  }

  /**
   * Toggle for visibility of the stack trace
   */
  @State()
  private stackTraceIsOpen = false

  private toggleStackTraceIsOpen = (e: MouseEvent) => {
    e.preventDefault()
    this.stackTraceIsOpen = !this.stackTraceIsOpen
  }

  @Element()
  private el: HTMLStencilaCodeErrorElement | null

  componentWillLoad() {
    this.updateLevel()
    this.updateHasStackTrace()
  }

  render() {
    return (
      <Host>
        <div class="overview" onClick={this.toggleStackTraceIsOpen}>
          <slot name="type" />
          <slot name="message" />
          <stencila-icon
            icon="stack"
            class={`stacktrace-icon ${this.hasStackTrace ? '' : 'hide'}`}
          ></stencila-icon>
        </div>
        <stencila-details
          open={this.stackTraceIsOpen}
          class={`stacktrace-details ${this.hasStackTrace ? '' : 'hide'}`}
        >
          <slot name="stacktrace" />
        </stencila-details>
      </Host>
    )
  }
}
