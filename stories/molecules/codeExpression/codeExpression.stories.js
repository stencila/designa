import { html } from 'lit-html'

export default {
  title: 'Schema Nodes/Code Expression',
  component: 'stencila-code-expression',
}

const handler = console.log

export const codeExpression = () => html`
  <div>
    <stencila-code-expression
      programming-language="r"
      itemscope=""
      itemtype="http://schema.stenci.la/CodeExpression"
      .executeHandler=${handler}
    >
      <code class="r" slot="text"
        >length(subset(data2, Lot==1 &amp; Time==0)$value)</code
      >
      <output slot="output"
        ><span data-itemtype="http://schema.org/Number">3</span></output
      >
    </stencila-code-expression>
  </div>
`

export const codeExpressionInAParagraph = () => html`
  <p>
    This is a paragraph with a code expresssion inside it
    <stencila-code-expression
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <code slot="text">x * y </code>
      <output slot="output">42</output></stencila-code-expression
    >
    followed by some more text.
  </p>
`

export const multipleCodeExpressionsInAParagraph = () => html`
  <p>
    This is a paragraph with a code expresssion inside it
    <stencila-code-expression
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <code slot="text">x * y</code>
      <output slot="output">42</output></stencila-code-expression
    >
    followed by some more text and another
    <stencila-code-expression
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <code slot="text">x * y - 128 * (212 - 2)</code>
      <output slot="output">
        Reaaaaalllyyyyyyyy loooongggggggggggggggggggg output
      </output> </stencila-code-expression
    >.
  </p>
`

export const codeExpressionWithAnImageOutput = () => html`
  <p>
    This is a paragraph with a code expresssion inside it
    <stencila-code-expression
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
      ><code slot="text">x * y</code
      ><output slot="output">42</output></stencila-code-expression
    >
    followed by some more text and another
    <stencila-code-expression
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
    >
      <code slot="text">x * y - 128 * (212 - 2)</code>
      <output slot="output"
        ><img src="https://place-hold.it/150x200"
      /></output> </stencila-code-expression
    >.
  </p>
`

export const codeExpressionWithNoOutput = () => html`
  <p>
    This is a paragraph with a code expresssion inside it
    <stencila-code-expression
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
      ><code slot="text">x * y</code><output slot="output"></output
    ></stencila-code-expression>
    followed by some more text.
  </p>
`

export const codeExpressionWithSymbolsInOutput = () => html`
  <p>
    This is a paragraph with a code expresssion inside it
    <stencila-code-expression
      data-collapsed="false"
      itemtype="stencila:CodeChunk"
      ><code slot="text">x * y</code
      ><output slot="output">&lt;0.001</output></stencila-code-expression
    >
    followed by some more text.
  </p>
`
