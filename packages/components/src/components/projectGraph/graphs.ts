import { SimulationLinkDatum, SimulationNodeDatum } from 'd3-force'
import { FileResource, Graph, GraphNode, Relation } from './types'
import { hasPath } from './utils/guards'

export type GraphLink = SimulationLinkDatum<SimulationNodeDatum & GraphNode> & {
  relation: Relation
  group: string
}

export const graphEdgeToLinks = (graph: Graph): GraphLink[] =>
  graph.edges.reduce((links: GraphLink[], edge) => {
    const targetNode = graph.nodes[edge.to]
    const group = hasPath(targetNode) ? targetNode.path : 'leaf'

    return [
      ...links,
      { source: edge.from, target: edge.to, group, relation: edge.relation },
    ]
  }, [])

type GroupedGraph = {
  nodes: GraphNode[]
  links: GraphLink[]
  groupLinks: GraphLink[]
}

export const graphToGroupedGraph = (graph: Graph): GroupedGraph => {
  const nodes = [...graph.nodes]

  const groupedGraph: GroupedGraph = {
    nodes: graph.nodes,
    links: graphEdgeToLinks(graph),
    groupLinks: [],
  }

  const files = nodes.filter((node) => node.type === 'File') as FileResource[]
  const fileLinkedNodes = graph.nodes.filter(
    (node) => hasPath(node) && node.type !== 'File'
  )

  const fileIndexByPath = (path: string): number | undefined =>
    files.find((file) => file.path === path)?.index

  for (const file of files) {
    const fileIndex = fileIndexByPath(file.path)

    if (fileIndex === undefined) break

    for (const node of fileLinkedNodes) {
      if (hasPath(node) && node.path === file.path) {
        groupedGraph.groupLinks.push({
          source: node.index,
          target: file.index,
          group: node.path,
          relation: {
            type: 'Embed',
          },
        })
      }
    }
  }

  return groupedGraph
}

export const isInterGroupLink = (
  source: GraphLink['source'],
  target: GraphLink['target']
): boolean => {
  if (hasPath(source) && hasPath(target)) {
    return (
      (target.path !== '' || target.path !== '') && target.path === source.path
    )
  }

  return false
}
