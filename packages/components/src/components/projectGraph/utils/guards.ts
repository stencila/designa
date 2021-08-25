import { SymbolResource, NodeResource, FileResource, Resource } from '../types'

export const hasPath = (
  resource: string | number | Resource
): resource is SymbolResource | NodeResource | FileResource => {
  if (
    typeof resource === 'object' &&
    (resource.type === 'Symbol' ||
      resource.type === 'Node' ||
      resource.type === 'File')
  ) {
    return true
  }

  return false
}
