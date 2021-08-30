import { SimulationNodeDatum } from 'd3-force'

type NodeType = string | number | SimulationNodeDatum

export const getNodeX = (node: NodeType): number => {
  if (typeof node === 'number') {
    return node
  } else if (typeof node === 'string') {
    return Number.parseInt(node, 10)
  }

  return node.x ?? 0
}

export const getNodeY = (node: NodeType): number => {
  if (typeof node === 'number') {
    return node
  } else if (typeof node === 'string') {
    return Number.parseInt(node, 10)
  }

  return node.y ?? 0
}
