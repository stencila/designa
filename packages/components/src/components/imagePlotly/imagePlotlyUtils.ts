import { Node } from '@stencila/schema'
import { Data, Layout, Config } from 'plotly.js'

export const plotlyMediaType = 'application/vnd.plotly.v1+json'

export interface PlotlyObject {
  mediaType: string
  data: Data[]
  config?: Config
  layout?: Layout
}

export const isPlotlyObject = (node: Node): node is PlotlyObject => {
  return (
    typeof node === 'object' &&
    node !== null &&
    'mediaType' in node &&
    node.mediaType === plotlyMediaType
  )
}
