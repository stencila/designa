import { html } from 'lit-html'

export default {
  title: 'Atoms/Tab',
  component: 'stencila-tab'
}

export const inactive = () =>
  html`
    <ul role="tablist">
      <li role="presentation">
        <a role="tab" tabindex="-1" href="#">Hello World</a>
      </li>
    </ul>
  `

export const active = () =>
  html`
    <ul role="tablist">
      <li role="presentation">
        <a role="tab" aria-selected="true" tabindex="-1" href="#"
          >Hello World</a
        >
      </li>
    </ul>
  `
