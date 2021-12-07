import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/Code Block',
  component: 'stencila-code-block',
}

export const codeBlock = ({
  activeLanguage,
  lineNumbers,
  lineWrapping,
  readOnly,
  foldGutter,
  executableLanguages,
}) => html`
  <stencila-code-block
    .activeLanguage=${activeLanguage}
    .lineNumbers=${lineNumbers}
    .lineWrapping=${lineWrapping}
    .foldGutter=${foldGutter}
    .readOnly=${readOnly}
    .executableLanguages=${executableLanguages}
  >
    <pre slot="text">
<code>Code with no language</code></pre>
  </stencila-code-block>

  <stencila-code-block
    programming-language="python"
    .activeLanguage=${activeLanguage}
    .lineNumbers=${lineNumbers}
    .lineWrapping=${lineWrapping}
    .foldGutter=${foldGutter}
    .readOnly=${readOnly}
    .executableLanguages=${executableLanguages}
  >
    <meta itemprop="programmingLanguage" content="python" />
    <pre slot="text">
<code itemprop="text" class="language-python"># Some Python code
1 + 1</code></pre>
  </stencila-code-block>
`
