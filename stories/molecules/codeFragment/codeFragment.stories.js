import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/Code Fragment',
  component: 'stencila-code-fragment',
  argTypes: {
    mode: {
      defaultValue: 'read',
      control: {
        type: 'select',
      },
      options: ['read', 'edit'],
    },
  },
}

export const codeFragment = ({ mode }) => html`
  <div>
    <p>
      <span>Some</span>
      <stencila-code-fragment .mode=${mode}>
        <code slot="text">code</code>
      </stencila-code-fragment>
      <span>in a paragraph.</span>
    </p>
    <p>
      <span>With a language</span>
      <stencila-code-fragment
        programming-language="python"
        .mode=${mode}
        itemtype="http://schema.stenci.la/CodeFragment"
      >
        <code slot="text" class="language-python">
          <meta itemprop="programmingLanguage" content="python" />
          1 + 1
        </code>
      </stencila-code-fragment>
      <span>specified.</span>
    </p>
  </div>
`
