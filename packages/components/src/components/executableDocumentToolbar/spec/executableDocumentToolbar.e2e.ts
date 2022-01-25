import { newE2EPage } from '@stencil/core/testing'

describe('stencila-document-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent(
      '<stencila-document-toolbar></stencila-document-toolbar>'
    )

    const element = await page.find('stencila-document-toolbar')
    expect(element).toHaveClass('hydrated')
  })
})
