import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/Error',
  component: 'stencila-code-error',
  argTypes: {
    kind: {
      defaultValue: 'warning',
      control: {
        type: 'select',
        options: ['info', 'warning', 'error'],
      },
    },
  },
}

export const withStacktrace = ({ kind }) =>
  html`
    <stencila-code-error kind=${kind}>
      We’re sorry, something has gone wrong...
      <pre slot="stacktrace"><code>Some stack trace goes here...</code></pre>
    </stencila-code-error>
  `
withStacktrace.args = {
  kind: 'error',
}

export const withoutStacktrace = ({ kind }) =>
  html`
    <stencila-code-error kind=${kind}>
      We’re sorry, something has gone wrong...
    </stencila-code-error>
  `
