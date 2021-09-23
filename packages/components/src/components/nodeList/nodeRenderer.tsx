import { FunctionalComponent, h, VNode } from '@stencil/core'
import { isA, isIn, isPrimitive, Node as StencilaNode } from '@stencila/schema'

const schemaNodeHTMLRegExp = /itemtype=".+?"/

const renderNode = (node: StencilaNode | Node): VNode => {
  if (typeof node === 'string' && schemaNodeHTMLRegExp.test(node)) {
    return <span innerHTML={node}></span>
  }

  if (node instanceof Node) {
    return <span>{node}</span>
  }

  if (node instanceof HTMLElement) {
    return <span innerHTML={node.outerHTML}></span>
  }

  if (isPrimitive(node)) {
    const text =
      typeof node === 'string' || typeof node === 'number'
        ? node
        : JSON.stringify(node)

    return (
      <pre>
        <output>{text}</output>
      </pre>
    )
  } else if (isIn('CodeTypes', node)) {
    return (
      <pre>
        <output>{node.text}</output>
      </pre>
    )
  } else if (isA('ImageObject', node)) {
    return <stencila-image-object image={node}></stencila-image-object>
  } else if (isA('Datatable', node)) {
    return <stencila-data-table table={node}></stencila-data-table>
  }

  return <span>{JSON.stringify(node)}</span>
}

interface Props {
  node?: StencilaNode | Node
}

export const NodeRenderer: FunctionalComponent<Props> = ({ node }) => (
  <span class="output">{node !== undefined ? renderNode(node) : null}</span>
)
