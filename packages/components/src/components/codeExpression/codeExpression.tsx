import { Component, h } from '@stencil/core'

@Component({
  tag: 'stencila-codeexpression',
  styleUrl: 'codeExpression.css'
})
export class CodeExpression {
  public static slots = {
    text: 'text',
    output: 'output'
  }

  public render() {
    return (
      <stencila-codechunk>
        <slot name={CodeExpression.slots.text} />
        <slot name={CodeExpression.slots.output} />
      </stencila-codechunk>
    )
  }
}
