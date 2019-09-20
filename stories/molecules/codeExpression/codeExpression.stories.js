import { storiesOf } from '@storybook/html'

storiesOf('Molecules/CodeExpression', module)
  .add(
    'CodeExpression',
    () => `<div>
      <stencila-code-expression
        data-collapsed="false"
        itemtype="stencila:CodeChunk"
      >
        <code slot="text">x * y</code>
        <output slot="output">Reaaaaalllyyyyyyyy loooongggggggggggggggggggg output</output>
      </stencila-code-expression>
    `
  )
  .add(
    'CodeExpression within a paragraph',
    () => `<p>
      This is a paragraph with a code expresssion inside it
      <stencila-code-expression
        data-collapsed="false"
        itemtype="stencila:CodeChunk"
      ><code slot="text">x * y</code><output slot="output">42</output></stencila-code-expression> followed by some more text.
    </p>`
  )
  .add(
    'Multiple CodeExpression within a paragraph',
    () => `<p>
      This is a paragraph with a code expresssion inside it
      <stencila-code-expression
        data-collapsed="false"
        itemtype="stencila:CodeChunk"
      ><code slot="text">x * y</code><output slot="output">42</output></stencila-code-expression> followed by some more text and
      another <stencila-code-expression
        data-collapsed="false"
        itemtype="stencila:CodeChunk"
      >
        <code slot="text">x * y - 128 * (212 - 2)</code>
        <output slot="output">Reaaaaalllyyyyyyyy loooongggggggggggggggggggg output</output>
      </stencila-code-expression>.
    </p>`
  )
  .add(
    'CodeExpression with an image output',
    () => `<p>
      This is a paragraph with a code expresssion inside it
      <stencila-code-expression
        data-collapsed="false"
        itemtype="stencila:CodeChunk"
      ><code slot="text">x * y</code><output slot="output">42</output></stencila-code-expression> followed by some more text and
      another <stencila-code-expression
        data-collapsed="false"
        itemtype="stencila:CodeChunk"
      >
        <code slot="text">x * y - 128 * (212 - 2)</code>
        <output slot="output"><img src="https://via.placeholder.com/150x200"</output>
      </stencila-code-expression>.
    </p>`
  )
