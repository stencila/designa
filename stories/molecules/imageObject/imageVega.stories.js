import { html } from 'lit-html'

const testSpec = {
  description: 'A simple bar chart with embedded spec.',
  spec: {
    values: [
      { a: 'A', b: 28 },
      { a: 'B', b: 55 },
      { a: 'C', b: 43 },
      { a: 'D', b: 91 },
      { a: 'E', b: 81 },
      { a: 'F', b: 53 },
      { a: 'G', b: 19 },
      { a: 'H', b: 87 },
      { a: 'I', b: 52 },
    ],
  },
  mark: 'bar',
  encoding: {
    x: { field: 'a', type: 'nominal', axis: { labelAngle: 0 } },
    y: { field: 'b', type: 'quantitative' },
  },
}

export default {
  title: 'Schema Nodes/ImageObject/Vega',
  component: 'stencila-image-vega',
  args: {
    spec: testSpec,
  },
}

export const complete = ({ spec }) => html`
  <stencila-image-vega .spec=${spec}>
    <picture>
      <script type="application/vega-lite">
        ${JSON.stringify(testSpec)}
      </script>
      <img src="https://via.placeholder.com/150" />
    </picture>
  </stencila-image-vega>
`
complete.args = {
  spec: undefined,
}

export const withInlineSource = ({ spec }) => html`
  <stencila-image-vega .spec=${spec}>
    <picture>
      <img src="https://via.placeholder.com/150" />
    </picture>
  </stencila-image-vega>
`
