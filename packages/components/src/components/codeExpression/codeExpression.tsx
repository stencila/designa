import { Component, h } from '@stencil/core'

@Component({
  tag: 'stencila-code-expression',
  styleUrl: 'codeExpression.css'
})
export class CodeExpression {
  public static slots = {
    text: 'text',
    output: 'output'
  }

  public render() {
    return (
      <stencila-code-chunk>
        <slot name={CodeExpression.slots.text} />
        <slot name="code" />
        <slot name={CodeExpression.slots.output} />
      </stencila-code-chunk>
    )
  }
}
