import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/ImageObject/Plotly',
  component: 'stencila-image-plotly',
}

const scatter = {
  data: [{ x: [1, 2], y: [2, 3] }],
}

export const complete = () => html`
  <stencila-image-plotly>
    <picture>
      <script type="application/vnd.plotly.v1+json">
        ${JSON.stringify(scatter)}
      </script>
      <img src="https://via.placeholder.com/150" />
    </picture>
  </stencila-image-plotly>
`

export const withNoSource = () => html`
  <stencila-image-plotly>
    <picture>
      <img src="https://via.placeholder.com/150" />
    </picture>
  </stencila-image-plotly>
`

export const withInlineSource = () => html`
  <stencila-image-plotly .data=${scatter}>
    <picture>
      <img src="https://via.placeholder.com/150" />
    </picture>
  </stencila-image-plotly>
`

export const withMultipleInstances = () => html`
  <stencila-image-plotly>
    <picture>
      <script type="application/vnd.plotly.v1+json">
        ${JSON.stringify(scatter)}
      </script>
      <img src="https://via.placeholder.com/150" />
    </picture>
  </stencila-image-plotly>

  <stencila-image-plotly>
    <picture>
      <img src="https://via.placeholder.com/150" />
    </picture>
  </stencila-image-plotly>

  <stencila-image-plotly .data=${scatter}>
    <picture>
      <img src="https://via.placeholder.com/150" />
    </picture>
  </stencila-image-plotly>
`
