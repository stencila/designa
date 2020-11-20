import { html } from 'lit-html'
import { iconNames } from '../icons/iconNames'

export default {
  title: 'Atoms/Input',
  component: 'stencila-input',
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    iconStart: {
      defaultValue: 'key',
      control: {
        type: 'select',
        options: iconNames,
      },
    },
    inputmode: {
      control: {
        type: 'select',
        options: [
          'text',
          'tel',
          'url',
          'email',
          'numeric',
          'decimal',
          'search',
        ],
      },
    },
    type: {
      defaultValue: 'text',
      control: {
        type: 'select',
        options: ['text', 'number', 'password'],
      },
    },
  },
}

export const inputField = ({
  hideLabel,
  iconStart,
  inline,
  name,
  placeholder,
  required,
  type,
  value,
}) => {
  return html`
    <stencila-input
      .iconStart=${iconStart}
      .name=${name}
      .type=${type}
      ?hideLabel=${hideLabel}
      ?inline=${inline}
      ?required=${required}
      .placeholder=${placeholder}
      .value=${value}
    /></stencila-input>
  `
}

export const withLabel = ({
  hideLabel,
  iconStart,
  inline,
  name,
  placeholder,
  required,
  type,
}) => {
  return html`
  <label>
    My Input
    <stencila-input
      .iconStart=${iconStart}
      .name=${name}
      .type=${type}
      ?hideLabel=${hideLabel}
      ?inline=${inline}
      ?required=${required}
      .placeholder=${placeholder}
      .value=${value}
    /></stencila-input>
  </label>
  `
}
