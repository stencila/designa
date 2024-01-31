export const getNodeX = (node) => {
  var _a;
  if (typeof node === 'number') {
    return node;
  }
  else if (typeof node === 'string') {
    return Number.parseInt(node, 10);
  }
  return (_a = node.x) !== null && _a !== void 0 ? _a : 0;
};
export const getNodeY = (node) => {
  var _a;
  if (typeof node === 'number') {
    return node;
  }
  else if (typeof node === 'string') {
    return Number.parseInt(node, 10);
  }
  return (_a = node.y) !== null && _a !== void 0 ? _a : 0;
};
//# sourceMappingURL=nodes.js.map