import { newSpecPage } from '@stencil/core/testing'
import { Button } from '../button'

const getEl = (html?: string) =>
  newSpecPage({
    components: [Button],
    html: html ?? `<stencila-button>Hello there</stencila-button>`,
  })

describe('button', () => {
  it('renders', async () => {
    const page = await getEl()

    expect(page.root).toEqualHtml(`
      <stencila-button size="default">
        <button class="color-primary default">
          <span class="label">Hello there</span>
        </button>
      </stencila-button>
    `)
  })

  it('renders an anchor link', async () => {
    const page = await getEl(
      `<stencila-button href="#">Hello there</stencila-button>`
    )

    expect(page.root).toEqualHtml(`
      <stencila-button href="#" size="default">
        <a class="button color-primary default" href="#">
          <span class="label">Hello there</span>
        </a>
      </stencila-button>
    `)
  })
})
