import { boolean } from '@storybook/addon-knobs'
import { html } from 'lit-html'

export default {
  title: 'Atoms/Menu',
  component: 'stencila-menu',
}

export const menu = () =>
  html`
    <stencila-menu ?is-open=${boolean('isOpen', true)}>
      <stencila-menu-item icon="home">Home</stencila-menu-item>
      <stencila-menu-item icon="user">Profile</stencila-menu-item>
      <stencila-menu-item icon="settings">Settings</stencila-menu-item>
    </stencila-menu>
  `

export const withToggleButton = () =>
  html`
    <stencila-menu ?isOpen=${boolean('isOpen', true)}>
      <stencila-button
        ?icon-only=${true}
        icon="menu"
        size="small"
        slot="toggle"
        aria-label="Toggle menu"
      ></stencila-button>

      <stencila-menu-item icon="home">Home</stencila-menu-item>
      <stencila-menu-item icon="user">Profile</stencila-menu-item>
      <stencila-menu-item icon="settings">Settings</stencila-menu-item>
    </stencila-menu>
  `

export const emptyMenu = () =>
  html`<stencila-menu ?is-open=${boolean('isOpen', true)}></stencila-menu>`

export const menuWithOneItem = () => html`
  <stencila-menu ?is-open=${boolean('isOpen', true)}>
    <stencila-menu-item>Lonely menu item</stencila-menu-item>
  </stencila-menu>
`

export const menuWithIcons = () => html`
  <stencila-menu ?is-open=${boolean('isOpen', true)}>
    <stencila-menu-item icon="grid">Projects</stencila-menu-item>
    <stencila-menu-item icon="user" }}>Profile</stencila-menu-item>
    <stencila-menu-item icon="log-out">Sign Out</stencila-menu-item>
  </stencila-menu>
`
