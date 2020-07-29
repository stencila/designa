import { newSpecPage } from '@stencil/core/testing'
import { StencilaToast } from './toast'

describe('stencila-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StencilaToast],
      html: `<stencila-toast></stencila-toast>`,
    })
    expect(page.root).toEqualHtml(`
      <stencila-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </stencila-toast>
    `)
  })
})
