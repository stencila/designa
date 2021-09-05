import { newSpecPage } from '@stencil/core/testing'
import { CodeChunkComponent } from '../codeChunk'

const getEl = (html?: string) =>
  newSpecPage({
    components: [CodeChunkComponent],
    html: html ?? `<stencila-code-chunk></stencila-code-chunk>`,
  })

describe('code-chunk', () => {
  it('renders', async () => {
    const page = await getEl(`
      <stencila-code-chunk>
      </stencila-code-chunk>`)

    expect(page.root?.querySelector('stencila-editor')).toBeDefined()
  })

  it('uses the provided programming language prop', async () => {
    const page = await getEl(`
      <stencila-code-chunk programming-language="TOML">
      </stencila-code-chunk>`)

    expect(page.rootInstance.programmingLanguage).toEqual('TOML')
  })

  it('supports legacy programming language prop', async () => {
    const page = await getEl(`
      <stencila-code-chunk data-programmingLanguage="YAML">
      </stencila-code-chunk>`)

    expect(page.rootInstance.programmingLanguage).toEqual('YAML')
  })
})
