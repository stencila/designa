import { html } from 'lit-html'

export default {
  title: 'Atoms/Menu',
  component: 'stencila-menu',
}

export const menu = ({ isOpen }) =>
  html`
    <stencila-menu .isOpen=${isOpen}>
      <stencila-menu-item icon="home">Home</stencila-menu-item>
      <stencila-menu-item icon="user">Profile</stencila-menu-item>
      <stencila-menu-item icon="settings">Settings</stencila-menu-item>
    </stencila-menu>
  `

export const withToggleButton = ({ isOpen }) =>
  html`
    <stencila-menu .isOpen=${isOpen}>
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

export const emptyMenu = ({ isOpen }) =>
  html`<stencila-menu .isOpen=${isOpen}></stencila-menu>`

export const menuWithOneItem = ({ isOpen }) => html`
  <stencila-menu .isOpen=${isOpen}>
    <stencila-menu-item>Lonely menu item</stencila-menu-item>
  </stencila-menu>
`

export const menuWithIcons = ({ isOpen }) => html`
  <stencila-menu .isOpen=${isOpen}>
    <stencila-menu-item icon="grid">Projects</stencila-menu-item>
    <stencila-menu-item icon="user" }}>Profile</stencila-menu-item>
    <stencila-menu-item icon="log-out">Sign Out</stencila-menu-item>
  </stencila-menu>
`
