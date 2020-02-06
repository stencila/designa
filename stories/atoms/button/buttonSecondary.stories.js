import { html } from 'lit-html'
import { props } from './button.stories'

export default {
  title: 'Atoms/Button/Secondary',
  component: 'stencila-button'
}

export const withText = () => {
  const { disabled } = props()

  return html`
    <button class="secondary color-stock" ?disabled=${disabled}>
      Hello World
    </button>
  `
}

export const withEmoji = () => {
  return html`
    <button class="secondary">😀 😎 👍 💯</button>
  `
}
