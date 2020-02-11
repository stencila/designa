import { html } from 'lit-html'

export default {
  title: 'Molecules/Node List',
  component: 'stencila-node-list'
}

const nodes = [
  'Text result',
  { type: 'ImageObject', contentUrl: 'https://via.placeholder.com/150' },
  {
    type: 'Datatable',
    columns: [
      {
        type: 'DatatableColumn',
        name: 'A',
        values: ['1', '2', '3']
      },
      {
        type: 'DatatableColumn',
        name: 'B',
        values: ['4', '5', '6']
      }
    ]
  }
]

export const emptyState = () => html`
  <stencila-node-list .nodes=${[]}>
  </stencila-code-chunk>
`

export const signleNode = () => html`
  <stencila-node-list .nodes=${[nodes[0]]}>
  </stencila-code-chunk>

`
export const multipleNodes = () => html`
  <stencila-node-list .nodes=${nodes}>
  </stencila-code-chunk>
`

export const dataTable = () => html`
  <stencila-node-list .nodes=${[nodes[2]]}>
  </stencila-code-chunk>
`
