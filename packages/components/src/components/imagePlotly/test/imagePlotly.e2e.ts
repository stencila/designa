import { newE2EPage } from '@stencil/core/testing'

describe('stencila-image-plotly', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<stencila-image-plotly></stencila-image-plotly>')

    const element = await page.find('stencila-image-plotly')
    expect(element).toHaveClass('hydrated')
  })
})
