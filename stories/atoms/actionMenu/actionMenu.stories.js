import { boolean } from '@storybook/addon-knobs'
import { html } from 'lit-html'

export default {
  title: 'Molecules/Action Menu',
  component: 'stencila-action-menu'
}

export const actionMenu = () => {
  const expandable = boolean('expandable', false)

  return html`
    <stencila-action-menu .expandable=${expandable}>
      <stencila-button size="xsmall" icon="command" is-secondary="true">
        Action 1
      </stencila-button>

      <stencila-button size="xsmall" icon="command" is-secondary="true">
        Action 2
      </stencila-button>

      <stencila-button size="xsmall" icon="command" is-secondary="true">
        Action 3
      </stencila-button>
    </stencila-action-menu>
  `
}
