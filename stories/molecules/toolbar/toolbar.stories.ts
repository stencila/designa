import { html } from 'lit-html'

export default {
  title: 'Molecules/Toolbar',
  component: 'stencila-toolbar',
  argTypes: {
    color: {
      type: 'select',
      options: [
        'primary',
        'success',
        'warn',
        'danger',
        'neutral',
        'stock',
        'key',
        'brand',
      ],
    },
    position: {
      control: {
        type: 'inline-radio',
        options: ['static', 'fixed'],
      },
    },
  },
  args: {
    color: 'primary',
    position: 'static',
  },
}

export const toolbar = ({ color, position }) => {
  return html`
    <div>
      <stencila-toolbar color=${color} position=${position}>
        <stencila-menu slot="start">
          <stencila-button
            ?icon-only=${true}
            color="stock"
            icon="menu"
            minimal
            size="small"
            slot="toggle"
            aria-label="Toggle menu"
          ></stencila-button>

          <stencila-menu-item icon="grid">Projects</stencila-menu-item>
          <stencila-menu-item icon="user" }}>Profile</stencila-menu-item>
          <stencila-menu-item icon="log-out">Sign Out</stencila-menu-item>
        </stencila-menu>

        <span slot="middle">Node List</span>

        <span slot="end">
          <stencila-button
            color="stock"
            minimal
            disabled
            icon="play"
            ?icon-only=${true}
            size="small"
            tooltip="Run"
          ></stencila-button>
          <stencila-button
            color="stock"
            minimal
            icon="save"
            ?icon-only=${true}
            size="small"
            tooltip="Save"
          ></stencila-button>
        </span>
      </stencila-toolbar>
    </div>
  `
}

// Article controls are WIP
const articleControls = ({ color, position }) => {
  return html`
    <div>
      <stencila-toolbar color=${color} position=${position}>
        <span slot="start">
          <stencila-button color="stock" icon="play" size="small">
            Run Document
          </stencila-button>
        </span>

        <span slot="middle" style="color: black;">
          <stencila-icon icon="loader-2"></stencila-icon>
          Starting session… You are 17th in line. Estimated wait time 38s
        </span>

        <span slot="end">
          <stencila-button color="stock" icon="git-branch" size="small"
            >Clone</stencila-button
          >
        </span>
      </stencila-toolbar>
    </div>
  `
}

const articleControlsActive = ({ color, position }) => {
  return html`
    <div>
      <stencila-toolbar color=${color} position=${position}>
        <span slot="start">
          <stencila-button color="stock" icon="play" size="small">
            Run Document
          </stencila-button>
        </span>

        <span slot="middle" style="color: var(--color-neutral-700);">
          <stencila-icon
            icon="check-circle"
            style="color: var(--color-success-600);"
          ></stencila-icon>
          Ran in 2.37s
        </span>

        <span slot="end">
          <stencila-button color="key" icon="stop-circle" size="small" minimal
            >End Session</stencila-button
          >
          <stencila-button color="stock" icon="git-branch" size="small"
            >Clone</stencila-button
          >
        </span>
      </stencila-toolbar>
    </div>
  `
}
articleControlsActive.args = { color: '--color-neutral-300' }
