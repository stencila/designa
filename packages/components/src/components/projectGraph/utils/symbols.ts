import {
  symbol,
  symbolCircle,
  symbolDiamond,
  symbolSquare,
  symbolStar,
  symbolTriangle,
  symbolWye,
} from 'd3-shape'
import { Resource } from '../types'

export const getResourceSymbol = (resource: Resource, size = 512) => {
  switch (resource.type) {
    case 'Node': {
      return symbol(symbolTriangle, size)
    }
    case 'Symbol': {
      return symbol(symbolDiamond, size)
    }
    case 'Source': {
      return symbol(symbolStar, size)
    }
    case 'File': {
      return symbol(symbolWye, size)
    }
    case 'Url': {
      return symbol(symbolSquare, size)
    }
    case 'Module':
    default: {
      return symbol(symbolCircle, size)
    }
  }
}
