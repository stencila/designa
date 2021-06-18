import { html } from 'lit-html'

export default {
  title: 'Molecules/Action Menu',
  component: 'stencila-action-menu',
}

export const actionMenu = () => {
  return html`
    <stencila-action-menu>
      <stencila-button
        size="xsmall"
        icon="command"
        color="key"
        ?minimal=${true}
      >
        Action 1
      </stencila-button>

      <stencila-button
        size="xsmall"
        icon="command"
        color="key"
        ?minimal=${true}
      >
        Action 2
      </stencila-button>

      <stencila-button
        size="xsmall"
        icon="command"
        color="key"
        ?minimal=${true}
      >
        Action 3
      </stencila-button>
    </stencila-action-menu>
  `
}
export const empty = () => {
  return html` <stencila-action-menu> </stencila-action-menu> `
}

export const withPersistentActions = () => {
  return html`
    <stencila-action-menu>
      <stencila-button
        size="xsmall"
        icon="command"
        color="key"
        ?minimal=${true}
        slot="persistentActions"
      >
        Action 1
      </stencila-button>

      <stencila-button
        size="xsmall"
        icon="command"
        color="key"
        ?minimal=${true}
        slot="persistentActions"
      >
        Action 2
      </stencila-button>

      <stencila-button
        size="xsmall"
        icon="command"
        color="key"
        ?minimal=${true}
      >
        Action 3
      </stencila-button>
    </stencila-action-menu>
  `
}

export const withOnlyPersistentActions = () => {
  return html`
    <stencila-action-menu>
      <stencila-button
        size="xsmall"
        icon="command"
        color="key"
        ?minimal=${true}
        slot="persistentActions"
      >
        Action 1
      </stencila-button>

      <stencila-button
        size="xsmall"
        icon="command"
        color="key"
        ?minimal=${true}
        slot="persistentActions"
      >
        Action 2
      </stencila-button>
    </stencila-action-menu>
  `
}
