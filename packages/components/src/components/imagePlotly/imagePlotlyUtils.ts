import { Node, isEntity } from '@stencila/schema'
import { PlotData, Layout, Config } from 'plotly.js'

export interface PlotlyObject {
  data: PlotData[]
  config?: Config
  layout?: Layout
}

export const isPlotly = (node: Node): node is PlotlyObject => {
  // For html hydration check `type` attr
  // For JSON schema check `mediaType`
  // mimetype === 'application/vnd.plotly.v1+json'
  // HTML hydration base64 decode string to JSON
  // @ts-ignore
  return isEntity(node) && node.type === 'plotly'
}
