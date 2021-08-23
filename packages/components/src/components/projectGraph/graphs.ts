import { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force'
import { Graph, GraphEdge } from './types'

export const graphEdgeToLinks = (edges: Graph['edges']) => {
  return edges.reduce(
    (links: (SimulationLinkDatum<SimulationNodeDatum> & GraphEdge)[], edge) => {
      return [...links, { ...edge, source: edge.from, target: edge.to }]
    },
    []
  )
}
