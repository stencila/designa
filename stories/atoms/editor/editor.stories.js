import { html } from 'lit-html'

export default {
  title: 'Atoms/Editor',
  component: 'stencila-editor',
}

export const editor = () =>
  html`
    <stencila-editor>
      <pre slot="text">
<code>print(2 + 2);
  &lt;a href="#"&gt;test&lt;/a&gt;

const f = (a) => {
  return a * 2;
}</code></pre>
    </stencila-editor>
  `

export const withoutLineNumbers = () =>
  html`
    <stencila-editor line-numbers="false">
      <pre slot="text">
<code>print(2 + 2);
  &lt;a href="#"&gt;test&lt;/a&gt;

const f = (a) => {
  return a * 2;
}</code></pre>
    </stencila-editor>
  `
