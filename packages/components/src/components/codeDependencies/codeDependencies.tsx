import { Component, Element, h, Host } from '@stencil/core'

@Component({
  tag: 'stencila-code-dependencies',
  styleUrls: {
    default: 'codeDependencies.css',
    material: 'codeDependencies.material.css',
  },
  scoped: true,
})
export class CodeDependencies {
  @Element() el: HTMLStencilaCodeDependenciesElement | null

  public render() {
    return (
      <Host>
        {this.el?.slot === 'code-dependencies' ? (
          <stencila-menu-item divider={true}>
            Upstream dependencies
          </stencila-menu-item>
        ) : (
          <stencila-menu-item divider={true}>
            Downstream dependencies
          </stencila-menu-item>
        )}

        <slot>
          {this.el?.slot === 'code-dependencies'
            ? 'No upstream dependencies'
            : this.el?.slot === 'code-dependents'
            ? 'No downtsream dependencies'
            : this.el?.slot ?? null}
        </slot>
      </Host>
    )
  }
}
