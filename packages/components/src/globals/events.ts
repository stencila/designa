import { Node } from '@stencila/schema'

export type StencilaNodeUpdateEvent = {
  type: string
  documentId: string
  nodeId: string
  value: Node
}
