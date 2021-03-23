import { newSpecPage } from '@stencil/core/testing'
import { ImageVegaComponent } from '../imageVega'

describe('stencila-image-plotly', () => {
  it.skip('renders', async () => {
    const page = await newSpecPage({
      components: [ImageVegaComponent],
      html: `<stencila-image-vega></stencila-image-vega>`,
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
