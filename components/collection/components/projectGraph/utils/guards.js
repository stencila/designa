export const hasPath = (resource) => {
  if (typeof resource === 'object' &&
    (resource.type === 'Symbol' ||
      resource.type === 'Node' ||
      resource.type === 'File')) {
    return true;
  }
  return false;
};
export const hasKind = (resource) => {
  if (typeof resource === 'object' &&
    (resource.type === 'Symbol' || resource.type === 'Node')) {
    return true;
  }
  return false;
};
//# sourceMappingURL=guards.js.map