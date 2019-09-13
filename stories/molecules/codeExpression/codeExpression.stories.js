import { storiesOf } from '@storybook/html'

storiesOf('Molecules/CodeExpression', module)
  .add(
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
  .add(
    'CodeExpression within a paragraph',
    () => `<p>
      This is a paragraph with a code expresssion inside it
      <stencila-codeexpression
        data-collapsed="false"
        itemtype="stencila:CodeChunk"
      >
        <pre slot="text"><code>x * y</code></pre>
        <pre slot="output"><output>42</output></pre>
      </stencila-codeexpression> followed by some more text.
    </p>`
  )
