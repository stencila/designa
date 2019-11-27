import { html } from 'lit-html'

export default {
  title: 'Atoms/Code Editor',
  component: 'stencila-code-editor'
}

export const codeEditor = () =>
  html`
    <stencila-code-editor
      >print(2 + 2); &lt;a href="#"&gt;test&lt;/a&gt;</stencila-code-editor
    >
  `

export const withoutLineNumbers = () =>
  html`
    <stencila-code-editor line-numbers="false"
      >print(2 + 2); &lt;a href="#"&gt;test&lt;/a&gt;</stencila-code-editor
    >
  `
