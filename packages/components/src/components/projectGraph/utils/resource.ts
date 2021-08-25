import { Resource } from '../types'

export const getResourceLabel = (resource: Resource): string => {
  switch (resource.type) {
    case 'Module': {
      return `${resource.language} ${resource.name}`
    }
    case 'Source': {
      return `${resource.type} ${resource.name}`
    }
    case 'Symbol': {
      return `${resource.kind} ${resource.name}`
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
