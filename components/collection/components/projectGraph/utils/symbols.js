import { symbol, symbolCircle, symbolDiamond, symbolSquare, symbolStar, symbolTriangle, symbolWye, } from 'd3-shape';
export const getResourceSymbol = (resource, size = 512) => {
  switch (resource.type) {
    case 'Node': {
      return symbol(symbolTriangle, size);
    }
    case 'Symbol': {
      return symbol(symbolDiamond, size);
    }
    case 'Source': {
      return symbol(symbolStar, size);
    }
    case 'File': {
      return symbol(symbolWye, size);
    }
    case 'Url': {
      return symbol(symbolSquare, size);
    }
    case 'Module':
    default: {
      return symbol(symbolCircle, size);
    }
  }
};
//# sourceMappingURL=symbols.js.map