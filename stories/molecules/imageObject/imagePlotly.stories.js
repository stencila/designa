import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/ImageObject/Plotly',
  component: 'stencila-image-plotly',
}

const scatter = {
  x: [1,2],
  y: [2,3]
}

export const complete = () => html`
  <stencila-image-plotly>
    <script slot="data" type="application/vnd.plotly.v1+json">${JSON.stringify(scatter)}</script>
    <img src="https://via.placeholder.com/150">
  </stencila-image-plotly>
`

export const withNoSource = () => html`
  <stencila-image-plotly>
    <img src="https://via.placeholder.com/150">
  </stencila-image-plotly>
`
