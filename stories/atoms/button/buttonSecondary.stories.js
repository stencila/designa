import { html } from 'lit-html'

export default {
  title: 'Atoms/Button/Secondary',
  component: 'stencila-button'
}

export const withText = () =>
  html`
    <button class="secondary">Hello World</button>
  `
export const withEmoji = () =>
  html`
    <button class="secondary">😀 😎 👍 💯</button>
  `
