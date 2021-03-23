import { Node } from '@stencila/schema'
import { VisualizationSpec, EmbedOptions } from 'vega-embed'

export const vegaMediaType = 'application/vnd.vega'

const vegaMediaTypes = [
  'application/vnd.vegalite.v2+json',
  'application/vnd.vegalite.v1+json',
  'application/vnd.vega.v3+json',
  'application/vnd.vega.v2+json',
]

export const isVegaMediaType = (mimeType: string): boolean =>
  vegaMediaTypes.some((vegaType) => vegaType.includes(mimeType))

export interface VegaObject {
  spec: VisualizationSpec | string
  options?: Partial<EmbedOptions>
}

export interface VegaNode extends VegaObject {
  mediaType: string
}

export const isVegaObject = (node: Node): node is VegaNode => {
  return (
    typeof node === 'object' &&
    node !== null &&
    'mediaType' in node &&
    isVegaMediaType(node.mediaType) &&
    node.spec !== null
  )
}
