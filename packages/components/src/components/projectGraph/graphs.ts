import { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force'
import { Graph, GraphEdge } from './types'

export type GraphLink = SimulationLinkDatum<SimulationNodeDatum> & GraphEdge

export const graphEdgeToLinks = (edges: Graph['edges']): GraphLink[] =>
  edges.reduce(
    (links: GraphLink[], edge) => [
      ...links,
      { ...edge, source: edge.from, target: edge.to },
    ],
    []
  )
