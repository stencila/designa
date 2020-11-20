import { html } from 'lit-html'

export default {
  title: 'Atoms/Button/Secondary',
  component: 'stencila-button',
}

export const withText = ({ disabled }) => {
  return html`
    <button class="secondary color-stock" ?disabled=${disabled}>
      Hello World
    </button>
  `
}

export const withEmoji = ({ disabled }) => {
  return html`
    <button class="secondary" ?disabled=${disabled}>😀 😎 👍 💯</button>
  `
}
