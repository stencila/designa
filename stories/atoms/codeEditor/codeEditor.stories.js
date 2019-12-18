import { html } from 'lit-html'

export default {
  title: 'Atoms/Code Editor',
  component: 'stencila-code-editor'
}

export const codeEditor = () =>
  html`
    <stencila-code-editor>
      <pre slot="text">
<code>print(2 + 2);
  &lt;a href="#"&gt;test&lt;/a&gt;

const f = (a) => {
  return a * 2;
}</code></pre>
    </stencila-code-editor>
  `

export const withoutLineNumbers = () =>
  html`
    <stencila-code-editor line-numbers="false">
      <pre slot="text">
<code>print(2 + 2);
  &lt;a href="#"&gt;test&lt;/a&gt;

const f = (a) => {
  return a * 2;
}</code></pre>
    </stencila-code-editor>
  `
