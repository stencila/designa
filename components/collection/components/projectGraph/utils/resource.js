export const getResourceLabel = (resource) => {
  switch (resource.type) {
    case 'Module': {
      return `${resource.language} ${resource.name}`;
    }
    case 'Source': {
      return `${resource.type} ${resource.name}`;
    }
    case 'Symbol': {
      return `${resource.kind} ${resource.name}`;
    }
    case 'Node': {
      return resource.kind;
    }
    case 'File': {
      return resource.path;
    }
    case 'Url': {
      return resource.url;
    }
  }
};
export const getRelationLabel = (relation) => {
  switch (relation.type) {
    case 'Assign':
    case 'Read':
    case 'Use': {
      return `${relation.type}s`;
    }
    case 'Convert':
    case 'Import': {
      return `${relation.type}s${relation.auto ? ' (auto)' : ''}`;
    }
    default: {
      return `${relation.type}s`;
    }
  }
};
//# sourceMappingURL=resource.js.map