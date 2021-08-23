import { Resource } from '../types'

export const getResourceLabel = (resource: Resource): string => {
  switch (resource.type) {
    case 'Symbol':
    case 'Module':
    case 'Source': {
      return resource.name
    }
    case 'Node': {
      return resource.kind
    }
    case 'File': {
      return resource.path
    }
    case 'Url': {
      return resource.url
    }
  }
}
