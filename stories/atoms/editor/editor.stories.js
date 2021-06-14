import { html } from 'lit-html'

export default {
  title: 'Atoms/Editor',
  component: 'stencila-editor',
}

export const editor = ({ lineNumbers, lineWrapping, readOnly, foldGutter }) =>
  html`
    <stencila-editor
      .lineNumbers=${lineNumbers}
      .lineWrapping=${lineWrapping}
      .foldGutter=${foldGutter}
      .readOnly=${readOnly}
    >
      <pre slot="text">
<code>print(2 + 2);
  &lt;a href="#"&gt;test&lt;/a&gt;

const f = (a) => {
  return a * 2;
}</code></pre>
    </stencila-editor>
  `
editor.args = {
  foldGutter: false,
}

export const withoutLineNumbers = ({
  lineNumbers,
  lineWrapping,
  readOnly,
  foldGutter,
}) =>
  html`
    <stencila-editor
      .lineNumbers=${lineNumbers}
      .lineWrapping=${lineWrapping}
      .foldGutter=${foldGutter}
      .readOnly=${readOnly}
    >
      <pre slot="text">
<code>print(2 + 2);
  &lt;a href="#"&gt;test&lt;/a&gt;

const f = (a) => {
  return a * 2;
}</code></pre>
    </stencila-editor>
  `

withoutLineNumbers.args = {
  lineNumbers: false,
}
