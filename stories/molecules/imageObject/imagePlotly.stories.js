import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/ImageObject/Plotly',
  component: 'stencila-image-plotly',
  args: {
    data: [{ x: [1, 2], y: [2, 3] }],
  },
}

export const complete = ({ data }) => html`
  <stencila-image-plotly>
    <picture>
      <script type="application/vnd.plotly.v1+json">
        ${JSON.stringify(data)}
      </script>
      <img src="https://place-hold.it/150" />
    </picture>
  </stencila-image-plotly>
`

export const withNoSource = () => html`
  <stencila-image-plotly>
    <picture>
      <img src="https://place-hold.it/150" />
    </picture>
  </stencila-image-plotly>
`

export const withInlineSource = ({ data }) => html`
  <stencila-image-plotly .data=${data}>
    <picture>
      <img src="https://place-hold.it/150" />
    </picture>
  </stencila-image-plotly>
`

export const withMultipleInstances = ({ data }) => html`
  <stencila-image-plotly>
    <picture>
      <script type="application/vnd.plotly.v1+json">
        ${JSON.stringify(data)}
      </script>
      <img src="https://place-hold.it/150" />
    </picture>
  </stencila-image-plotly>

  <stencila-image-plotly>
    <picture>
      <img src="https://place-hold.it/150" />
    </picture>
  </stencila-image-plotly>

  <stencila-image-plotly .data=${data}>
    <picture>
      <img src="https://place-hold.it/150" />
    </picture>
  </stencila-image-plotly>
`
