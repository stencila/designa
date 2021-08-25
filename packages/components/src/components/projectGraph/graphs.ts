import { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force'
import { Graph, GraphEdge } from './types'
import { hasPath } from './utils/guards'

export type GraphLink = SimulationLinkDatum<SimulationNodeDatum> &
  GraphEdge & { sourceGroup: null | string; targetGroup: null | string }

export const graphEdgeToLinks = (graph: Graph): GraphLink[] =>
  graph.edges.reduce((links: GraphLink[], edge) => {
    const sourceResource = graph.nodes[edge.from]
    const targetResource = graph.nodes[edge.to]

    const sourceGroup = hasPath(sourceResource) ? sourceResource.path : null
    const targetGroup = hasPath(targetResource) ? targetResource.path : null

    return [
      ...links,
      { ...edge, source: edge.from, target: edge.to, sourceGroup, targetGroup },
    ]
  }, [])

type GroupMap = Record<string, number[]>

export const graphGroups = (graph: Graph): GroupMap => {
  return graph.nodes.reduce((groups: GroupMap, node) => {
    if (hasPath(node)) {
      return {
        ...groups,
        [node.path]: [...(groups[node.path] ?? []), node.index],
      }
    }

    return {
      ...groups,
      leaves: [...(groups.leaves ?? []), node.index],
    }
  }, {})
}
