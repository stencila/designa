import { newE2EPage } from '@stencil/core/testing'

describe('stencila-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<stencila-toast></stencila-toast>')

    const element = await page.find('stencila-toast')
    expect(element).toHaveClass('hydrated')
  })
})
