import { newSpecPage } from '@stencil/core/testing'
import { ImagePlotlyComponent } from '../imagePlotly'

describe('stencila-image-plotly', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ImagePlotlyComponent],
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
