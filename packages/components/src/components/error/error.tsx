import { Component, Element, h, Host, Prop, State } from '@stencil/core'
import { CodeError } from '@stencila/schema'
import { IconNames } from '../icon/iconNames'

type Level = 'info' | 'warning' | 'error'

@Component({
  tag: 'stencila-code-error',
  styleUrls: {
    default: 'error.css',
    material: 'error.css',
  },
  scoped: true,
})
export class ErrorComponent {
  @Element()
  private el: HTMLStencilaCodeErrorElement | null

  /**
   * The `CodeError` object
   */
  @Prop() error?: CodeError

  /**
   * The severity of the error message
   */
  @Prop() kind: string | Level = 'info'

  @State() stackIsOpen = false

  private hasStack = false

  private toggleStackVisibility = (e: MouseEvent) => {
    e.preventDefault()
    this.stackIsOpen = !this.stackIsOpen
  }

  private getIcon(severity: Level): IconNames {
    switch (severity) {
      case 'error':
        return 'close-circle'
      case 'warning':
        return 'alert'
      default:
        return 'information'
    }
  }

  private getLevel(kind: string): Level {
    switch (kind) {
      case 'error':
      case 'incapable':
        return 'error'
      case 'warning':
      case 'warn':
        return 'warning'
      default:
        return 'info'
    }
  }

  componentWillLoad() {
    this.hasStack = !!this.el?.querySelector('[slot="stacktrace"]')
  }

  public render() {
    const severity = this.getLevel(this.error?.errorType ?? this.kind)

    return (
      <Host kind={severity}>
        <div class="overview" onClick={this.toggleStackVisibility}>
          <stencila-icon icon={this.getIcon(severity)}></stencila-icon>
          <slot />
        </div>

        {this.hasStack && (
          <stencila-details open={this.stackIsOpen}>
            <slot name="stacktrace" />
          </stencila-details>
        )}
      </Host>
    )
  }
}
