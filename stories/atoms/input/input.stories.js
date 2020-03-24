import { select, text, boolean } from '@storybook/addon-knobs'
import { html } from 'lit-html'

export default {
  title: 'Atoms/Input',
  excludeStories: ['props']
}

export const props = (overrides = {}) => ({
  type: select(
    'type',
    ['text', 'number', 'password'],
    overrides.type || 'text'
  ),
  placeholder: text('placeholder'),
  name: text('name', 'My Input'),
  required: boolean('required', false),
  inline: boolean('inline', false),
  hideLabel: boolean('hideLabel', false),
  iconStart: select('iconStart', [null, 'archive', 'key'], 'key')
})

export const inputField = () => {
  const {
    hideLabel,
    iconStart,
    inline,
    name,
    placeholder,
    required,
    type
  } = props()

  return html`
    <stencila-input
      .placeholder=${placeholder}
      .type=${type}
      hide-label=${hideLabel}
      icon-start=${iconStart}
      inline=${inline}
      name=${name}
      required=${required}
    /></stencila-input>
  `
}

export const withLabel = () => {
  const {
    hideLabel,
    iconStart,
    inline,
    name,
    placeholder,
    required,
    type
  } = props()

  return html`
  <label>
    My Input
    <stencila-input
      .placeholder=${placeholder}
      .type=${type}
      hide-label=${hideLabel}
      icon-start=${iconStart}
      inline=${inline}
      name=${name}
      required=${required}
    /></stencila-input>
  </label>
  `
}
