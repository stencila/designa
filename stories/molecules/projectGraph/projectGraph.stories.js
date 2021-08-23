import { html } from 'lit-html'
import { daggy, pastoll, themed } from './fixtures'

export default {
  title: 'Molecules/Project Graph',
  component: 'stencila-project-graph',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    graph: {
      options: ['daggy', 'themed', 'pastoll'],
      mapping: { daggy, themed, pastoll },
      labels: {
        daggy: 'daggy',
        themed: 'themed',
        pastoll: 'pastoll',
      },
    },
  },
}

export const details = ({ graph }) => html`
  <stencila-project-graph .graph=${graph}></stencila-project-graph>
`
details.args = {
  graph: 'daggy',
}
