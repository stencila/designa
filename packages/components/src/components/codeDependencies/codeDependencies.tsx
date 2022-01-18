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
        {(this.el?.children.length ?? 0) > 0 &&
          (this.el?.slot === 'code-dependencies' ? (
            <stencila-menu-item divider={true}>
              Upstream dependencies
            </stencila-menu-item>
          ) : this.el?.slot === 'code-dependents' ? (
            <stencila-menu-item divider={true}>
              Downstream dependents
            </stencila-menu-item>
          ) : null)}

        <slot />
      </Host>
    )
  }
}
