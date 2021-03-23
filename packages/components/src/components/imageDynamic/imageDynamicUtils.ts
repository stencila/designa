export const createPlotContainer = (root: HTMLElement): HTMLDivElement => {
  const plotContainer = document.createElement('div')
  const pic = root.querySelector<HTMLPictureElement>('picture')
  const targetEl = pic ?? root
  targetEl.appendChild(plotContainer)
  return plotContainer
}
