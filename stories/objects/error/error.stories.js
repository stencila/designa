import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/Error',
  component: 'stencila-code-error',
}

export const warning = () =>
  html`
    <stencila-code-error kind="warning" has-stacktrace="true">
      We’re sorry, something has gone wrong...
      <pre slot="stacktrace"><code>Some stack trace goes here...</code></pre>
    </stencila-code-error>
  `

export const error = () =>
  html`
    <stencila-code-error kind="error" has-stacktrace="true">
      We’re sorry, something has gone wrong...
      <pre slot="stacktrace"><code>Some stack trace goes here...</code></pre>
    </stencila-code-error>
  `

export const withoutStacktrace = () =>
  html`
    <stencila-code-error kind="warning">
      We’re sorry, something has gone wrong...
    </stencila-code-error>
  `
