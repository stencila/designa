import { storiesOf } from '@storybook/html'

storiesOf('Molecules/CodeExpression', module).add(
  'CodeExpression',
  () => `<div>
    <stencila-codeexpression
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <pre slot="text"><code>x * y</code></pre>
      <pre slot="output"><output>Reaaaaalllyyyyyyyy loooongggggggggggggggggggg output</output></pre>
    </stencila-codeexpression>
  `
)
