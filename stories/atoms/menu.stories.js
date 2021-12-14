import { html } from 'lit-html'

export default {
  title: 'Atoms/Menu',
  component: 'stencila-menu',
  args: {
    isOpen: true,
  },
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

export const withDivider = ({ isOpen }) =>
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

      <stencila-menu-item .divider=${true}>Non executable</stencila-menu-item>

      <stencila-menu-item icon="settings">Settings</stencila-menu-item>
    </stencila-menu>
  `

export const nestedMenu = ({ isOpen }) =>
  html`
    <stencila-menu .isOpen=${isOpen}>
      <stencila-button
        .autoClose=${false}
        ?icon-only=${true}
        icon="menu"
        size="small"
        slot="toggle"
        aria-label="Toggle menu"
      ></stencila-button>

      <stencila-menu-item icon="home">Home</stencila-menu-item>
      <stencila-menu-item icon="user">Profile</stencila-menu-item>
      <stencila-menu-item>
      <stencila-menu .isOpen=${true} .autoClose=${true}>
        <stencila-menu-item icon="home" slot="toggle">
          More
        </stencila-menu-item>

        <stencila-menu-item icon="user">Profile</stencila-menu-item>
        <stencila-menu-item icon="settings">Settings</stencila-menu-item>
      </stencila-menu>
      </stencila-menu-item>
      </li>
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
    <stencila-menu-item icon="logout-box-r">Sign Out</stencila-menu-item>
  </stencila-menu>
`
