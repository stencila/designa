import { hasPath } from './utils/guards';
export const graphEdgeToLinks = (graph) => graph.edges.reduce((links, edge) => {
  const targetNode = graph.nodes[edge.to];
  const group = hasPath(targetNode) ? targetNode.path : 'leaf';
  return [
    ...links,
    { source: edge.from, target: edge.to, group, relation: edge.relation },
  ];
}, []);
export const graphToGroupedGraph = (graph) => {
  const nodes = [...graph.nodes];
  const files = nodes.filter((node) => node.type === 'File');
  const fileLinkedNodes = graph.nodes.filter((node) => hasPath(node) && node.type !== 'File');
  const groupedGraph = {
    nodes: graph.nodes,
    links: graphEdgeToLinks(graph),
    groupLinks: [],
    groups: files,
  };
  const fileIndexByPath = (path) => { var _a; return (_a = files.find((file) => file.path === path)) === null || _a === void 0 ? void 0 : _a.index; };
  for (const file of files) {
    const fileIndex = fileIndexByPath(file.path);
    if (fileIndex === undefined)
      break;
    for (const node of fileLinkedNodes) {
      if (hasPath(node) && node.path === file.path) {
        groupedGraph.groupLinks.push({
          source: node.index,
          target: file.index,
          group: node.path,
          relation: {
            type: '',
          },
        });
      }
    }
  }
  return groupedGraph;
};
export const isInterGroupLink = (source, target) => {
  if (hasPath(source) && hasPath(target)) {
    return ((target.path !== '' || target.path !== '') && target.path === source.path);
  }
  return false;
};
//# sourceMappingURL=graphs.js.map