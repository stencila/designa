import { Component, h, Host } from '@stencil/core'

/**
 * @slot default - The table element to render. Expects a fully formed and valid HTML `table` tag.
 */
@Component({
  tag: 'stencila-data-table',
  styleUrls: {
    default: 'dataTable.css',
    material: 'dataTable.css',
  },
  scoped: true,
})
export class DataTable {
  public render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
