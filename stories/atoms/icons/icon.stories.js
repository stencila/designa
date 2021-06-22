import { html } from 'lit-html'
import { iconNames } from './iconNames'

export default {
  title: 'Atoms/Icons',
  component: 'stencila-icon',
  argTypes: {
    icon: {
      defaultValue: 'magic',
      control: {
        type: 'select',
      },
      options: iconNames,
    },
    iconStyle: {
      defaultValue: 'line',
      control: {
        type: 'select',
      },
      options: ['fill', 'line'],
    },
  },
}

export const icon = ({ icon, iconStyle }) => {
  return html`
    <stencila-icon icon=${icon} .iconStyle=${iconStyle}></stencila-icon>
  `
}
