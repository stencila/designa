import { html } from 'lit-html'

export default {
  title: 'Atoms/Tooltip',
  component: 'stencila-tooltip-element'
}

export const tooltip = () =>
  html`
    <stencila-tooltip-element>
      This is a simple tooltip
    </stencila-tooltip-element>
  `

export const revealedOnHover = () =>
  html`
    <stencila-tooltip text="This is a simple tooltip">
      Hover over me
    </stencila-tooltip>
  `
