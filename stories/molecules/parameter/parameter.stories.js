import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/Parameter',
  component: 'stencila-parameter',
  argTypes: {
    mode: {
      defaultValue: 'edit',
      options: ['edit', 'read'],
      control: { type: 'radio' },
    },
    validator: {
      defaultValue: 'NumberValidator',
      options: [
        'BooleanValidator',
        'EnumValidator',
        'IntegerValidator',
        'NumberValidator',
        'StringValidator',
      ],
    },
  },
}

export const number = ({ mode, validator }) => html`
  <stencila-parameter .mode=${mode} validator=${validator}>
    <label slot="name" for="input-id">pars</label>
    <meta
      itemprop="validator"
      itemtype="http://schema.stenci.la/NumberValidator"
      itemscope
    />
    <meta
      itemprop="value"
      itemtype="http://schema.stenci.la/Integer"
      itemscope
      content="50"
    />
    <input
      id="input-id"
      slot="value"
      type="number"
      min="0"
      max="100"
      value="50"
    />
  </stencila-parameter>
`

export const enumParameter = ({ mode, validator }) => html`<stencila-parameter
  .mode=${mode}
  .validator=${validator}
>
  <label slot="name" for="input-id">par</label>
  <meta
    itemprop="validator"
    itemtype="http://schema.stenci.la/EnumValidator"
    itemscope
  />
  <meta
    itemprop="default"
    itemtype="http://schema.stenci.la/String"
    itemscope
    content="A"
  />
  <meta
    itemprop="value"
    itemtype="http://schema.stenci.la/String"
    itemscope
    content="B"
  />
  <select id="input-id" slot="value">
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
  </select>
</stencila-parameter>`
enumParameter.args = {
  validator: 'EnumValidator',
}

export const withoutValidatorProp = ({ mode }) => html`
  <stencila-parameter .mode=${mode}>
    <label slot="name" for="input-id">pars</label>
    <meta
      itemprop="validator"
      itemtype="http://schema.stenci.la/IntegerValidator"
      itemscope
    />
    <meta
      itemprop="value"
      itemtype="http://schema.stenci.la/Integer"
      itemscope
      content="50"
    />
    <input
      id="input-id"
      slot="value"
      type="number"
      min="0"
      max="100"
      value="50"
    />
  </stencila-parameter>
`

export const withoutAValidator = ({ mode }) => html`
  <stencila-parameter .mode=${mode}>
    <label slot="name" for="input-id">pars</label>
    <meta
      itemprop="value"
      itemtype="http://schema.stenci.la/Integer"
      itemscope
      content="50"
    />
    <input
      id="input-id"
      slot="value"
      type="number"
      min="0"
      max="100"
      value="50"
    />
  </stencila-parameter>
`
