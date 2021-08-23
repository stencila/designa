import { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force'
import { Graph } from './types'

export const graphEdgeToLinks = (edges: Graph['edges']) => {
  return edges.reduce(
    (links: SimulationLinkDatum<SimulationNodeDatum>[], edge) => {
      return [...links, { ...edge, source: edge.from, target: edge.to }]
    },
    []
  )
}
