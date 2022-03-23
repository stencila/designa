import { MediaObject, Node } from '@stencila/schema'
import { Data, Layout, Config } from 'plotly.js'

export const plotlyMediaType = 'application/vnd.plotly.v1+json'

export interface PlotlyObject {
  data: Data[]
  config?: Partial<Config>
  layout?: Partial<Layout>
}

export interface PlotlyNode
  extends PlotlyObject,
    MediaObject,
    Record<string, unknown> {
  mediaType: string
}

export const isPlotlyObject = (node: Node): node is PlotlyNode => {
  return (
    typeof node === 'object' &&
    node !== null &&
    'mediaType' in node &&
    node.mediaType === plotlyMediaType
  )
}
