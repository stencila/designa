import { html } from 'lit-html'

export default {
  title: 'Molecules/Details',
  component: 'stencila-details'
}

export const details = () => html`
  <stencila-details>
    <p slot="summary">This is a custom Details component.</p>
    <p>This is an extra paragraph that is hidden by default.</p>
  </stencila-details>
`
