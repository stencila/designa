import { newSpecPage } from '@stencil/core/testing'
import { StencilaToast } from './toast'

describe.skip('stencila-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilaToast],
      html: `<stencila-toast></stencila-toast>`,
    })
    expect(page.root).toEqualHtml(`
      <stencila-toast>
      </stencila-toast>
    `)
  })
})
