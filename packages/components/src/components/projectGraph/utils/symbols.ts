import { symbol, symbolCircle, symbolSquare } from 'd3-shape'
import { Resource } from '../types'

export const getResourceSymbol = (resource: Resource) => {
  switch (resource.type) {
    case 'Url': {
      return symbol(symbolSquare, 24)
    }
    default: {
      return symbol(symbolCircle, 24)
    }
  }
}
