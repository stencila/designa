import { Node } from '@stencila/schema'

export type StencilaNodeUpdateEvent = {
  id: string
  value: Node
}
