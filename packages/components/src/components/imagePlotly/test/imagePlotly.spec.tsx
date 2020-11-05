import { newSpecPage } from '@stencil/core/testing'
import { StencilaImagePlotly } from '../imagePlotly'

describe('stencila-image-plotly', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilaImagePlotly],
      html: `<stencila-image-plotly></stencila-image-plotly>`,
    })
    expect(page.root).toEqualHtml(`
      <stencila-image-plotly>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencila-image-plotly>
    `)
  })
})
