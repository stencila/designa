export const createPlotContainer = (root) => {
  const plotContainer = document.createElement('div');
  const pic = root.querySelector('picture');
  const targetEl = pic !== null && pic !== void 0 ? pic : root;
  targetEl.appendChild(plotContainer);
  return plotContainer;
};
