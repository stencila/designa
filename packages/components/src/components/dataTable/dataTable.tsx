import { Component, h, Prop } from '@stencil/core'
import { Datatable } from '@stencila/schema'

@Component({
  tag: 'stencila-data-table',
  styleUrls: {
    default: 'dataTable.css',
    material: 'dataTable.css'
  },
  scoped: true
})
export class DataTable {
  /**
   * The `Datatable` node to render
   */
  @Prop() table: Datatable

  public render() {
    const cols = this.table.columns
    const rows = cols?.[0].values.map((_, row) => row) ?? []

    return (
      <table itemtype="https://schema.stenci.la/Datatable">
        <thead>
          <tr>
            {cols.map(col => (
              <th>{col.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((_, row) => (
            <tr>
              {cols.map(col => (
                <td>{col.values[row]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}
