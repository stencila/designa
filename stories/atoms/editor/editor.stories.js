import { html } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

export default {
  title: 'Atoms/Editor',
  component: 'stencila-editor',
  argTypes: {
    activeLanguage: {
      defaultValue: 'Python',
    },
    executableLanguages: {
      control: { type: 'object' },
      defaultValue: {
        JavaScript: {
          name: 'JavaScript',
          ext: 'js',
          aliases: ['javascript', 'js'],
        },
      },
    },
    text: {
      defaultValue: 'JavaScript',
      options: ['JavaScript', 'Python'],
      control: { type: 'select' },
      mapping: {
        JavaScript: `<pre slot="text"><code>print(2 + 2);
  <a href="#">test</a>;

const f = (a) => {
  return a * 2;
}</code></pre>`,
        Python: `<pre slot="text"><code># Use "def" to create new functions
def add(x, y):
    print("x is {} and y is {}".format(x, y))
    return x + y  # Return values with a return statement
</code></pre>`,
      },
    },
  },
}

const randomType = () =>
  Math.random() >= 0.5 ? 'error' : Math.random() >= 0.5 ? 'warning' : 'info'

const appendError = () => {
  const editor = document.getElementsByTagName('stencila-editor')[0]

  const errEl = document.createElement('stencila-code-error')
  errEl.setAttribute('kind', randomType())
  errEl.setAttribute('slot', 'errors')
  errEl.innerHTML = `We’re sorry, something has gone wrong...
<pre slot="stacktrace"><code>Some stack trace goes here...</code></pre>`

  editor.appendChild(errEl)
}

export const editor = ({
  activeLanguage,
  lineNumbers,
  text,
  lineWrapping,
  readOnly,
  foldGutter,
  executableLanguages,
}) => {
  return html`
    <button @click=${appendError}>Add errors</button>

    <stencila-editor
      .activeLanguage=${activeLanguage}
      .lineNumbers=${lineNumbers}
      .lineWrapping=${lineWrapping}
      .foldGutter=${foldGutter}
      .readOnly=${readOnly}
      .executableLanguages=${executableLanguages}
    >
      ${unsafeHTML(text)}
    </stencila-editor>
  `
}
editor.args = {
  foldGutter: false,
}

export const withoutLineNumbers = ({
  lineNumbers,
  lineWrapping,
  readOnly,
  foldGutter,
  executableLanguages,
}) =>
  html`
    <stencila-editor
      .lineNumbers=${lineNumbers}
      .lineWrapping=${lineWrapping}
      .foldGutter=${foldGutter}
      .readOnly=${readOnly}
      .executableLanguages=${executableLanguages}
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
