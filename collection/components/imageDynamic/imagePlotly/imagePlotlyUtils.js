export const plotlyMediaType = 'application/vnd.plotly.v1+json';
export const isPlotlyObject = (node) => {
  return (typeof node === 'object' &&
    node !== null &&
    'mediaType' in node &&
    node.mediaType === plotlyMediaType);
};
