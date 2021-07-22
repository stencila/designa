import { html } from 'lit-html'

export default {
  title: 'Atoms/Toast',
  component: 'stencila-toast',
  args: {
    duration: 0,
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
      },
      options: ['info', 'success', 'warn', 'danger'],
    },
    position: {
      control: {
        type: 'select',
      },
      options: [
        'topStart',
        'topCenter',
        'topEnd',
        'bottomStart',
        'bottomCenter',
        'bottomEnd',
      ],
    },
    dismissable: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export const toast = ({ type, duration, position, dismissable }) =>
  html`
    <stencila-toast
      .type=${type}
      .duration=${duration}
      .position=${position}
      .dismissable=${dismissable}
    >
      This is a simple toast
    </stencila-toast>
  `

export const dismissable = ({ type, duration, position, dismissable }) =>
  html`
    <stencila-toast-container .position=${position}>
      <stencila-toast
        .type=${type}
        .duration=${duration}
        .dismissable=${dismissable}
      >
        This is a simple toast
      </stencila-toast>

      <stencila-toast
        type="primary"
        .duration=${duration}
        .dismissable=${dismissable}
      >
        <span slot="title">This toast has a title</span>
        This is a simple toast
      </stencila-toast>

      <stencila-toast
        type="success"
        .duration=${duration}
        .dismissable=${dismissable}
      >
        This is a simple toast
      </stencila-toast>

      <stencila-toast
        type="warn"
        .duration=${duration}
        .dismissable=${dismissable}
      >
        This is a simple toast
      </stencila-toast>

      <stencila-toast
        type="danger"
        .duration=${duration}
        .dismissable=${dismissable}
      >
        This is a simple toast
      </stencila-toast>
    </stencila-toast-container>
  `
dismissable.args = {
  dismissable: true,
}

export const withAction = ({ type, duration, position, dismissable }) =>
  html`
    <stencila-toast-container .position=${position}>
      <stencila-toast
        .type=${type}
        .duration=${duration}
        .dismissable=${dismissable}
      >
        <div>Let's perform an action!</div>

        <div slot="actions">
          <stencila-button>Primary Action</stencila-button>
        </div>
      </stencila-toast>

      <stencila-toast
        type="primary"
        .duration=${duration}
        .dismissable=${dismissable}
      >
        <div>Let's perform an action!</div>

        <div slot="actions">
          <stencila-button>Primary Action</stencila-button>
          <stencila-button>Action</stencila-button>
        </div>
      </stencila-toast>

      <stencila-toast
        type="success"
        .duration=${duration}
        .dismissable=${dismissable}
      >
        <div>Let's perform an action!</div>

        <div slot="actions">
          <stencila-button>Primary Action</stencila-button>
          <stencila-button>Action</stencila-button>
        </div>
      </stencila-toast>

      <stencila-toast
        type="warn"
        .duration=${duration}
        .dismissable=${dismissable}
      >
        <div>Let's perform an action!</div>

        <div slot="actions">
          <stencila-button>Primary Action</stencila-button>
          <stencila-button>Action</stencila-button>
          <stencila-button>Action</stencila-button>
        </div>
      </stencila-toast>

      <stencila-toast
        type="danger"
        .duration=${duration}
        .dismissable=${dismissable}
      >
        <div>Let's perform an action!</div>

        <div slot="actions">
          <stencila-button>Primary Action</stencila-button>
          <stencila-button>Action</stencila-button>
        </div>
      </stencila-toast>
    </stencila-toast-container>
  `
withAction.args = {
  dismissable: true,
}
