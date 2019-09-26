import { storiesOf } from '@storybook/html'

storiesOf('Atoms/Tooltip', module)
  .add(
    'default',
    () =>
      '<stencila-tooltip-element>This is a simple tooltip</stencila-tooltip-element>'
  )
  .add(
    'Revealed on Hover',
    () =>
      '<stencila-tooltip text="This is a simple tooltip">Hover over me</stencila-tooltip>'
  )
