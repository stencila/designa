import { html } from 'lit-html'

export default {
  title: 'Molecules/Node List',
  component: 'stencila-node-list',
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
        values: ['1', '2', '3'],
      },
      {
        type: 'DatatableColumn',
        name: 'B',
        values: ['4', '5', '6'],
      },
    ],
  },
  'bin   dev  home  lib32\tlibx32\tmnt  proc  run\t srv  tmp  var\nboot  etc  lib\t lib64\tmedia\topt  root  sbin  sys  usr',
  true,
  20,
  null,
  {
    type: 'ImageObject',
    contentUrl: 'https://via.placeholder.com/150',
    content: [
      {
        mediaType: 'application/vnd.plotly.v1+json',
        data: [
          {
            x: [1, 2, 3, 4],
            y: [10, 11, 12, 13],
            mode: 'markers',
            marker: {
              size: [40, 60, 80, 100],
            },
          },
        ],
      },
    ],
  },
]

export const emptyState = () => html`
  <stencila-node-list .nodes=${[]}>
  </stencila-node-list>
`

export const singleNode = () => html`
  <stencila-node-list .nodes=${[nodes[0]]}>
  </stencila-node-list>

`
export const multipleNodes = () => html`
  <stencila-node-list .nodes=${nodes}>
  </stencila-node-list>
`

export const dataTable = () => html`
  <stencila-node-list .nodes=${[nodes[2]]}>
  </stencila-node-list>
`
