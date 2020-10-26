import { newE2EPage } from '@stencil/core/testing'

describe('stencila-executable-document-toolbar', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<stencila-executable-document-toolbar></stencila-executable-document-toolbar>')

    const element = await page.find('stencila-executable-document-toolbar')
    expect(element).toHaveClass('hydrated')
  })
})
