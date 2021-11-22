// Global mode (theme) configuration based on https://stackoverflow.com/a/56530775
export const getMode = (el: HTMLElement): string =>
  el.getAttribute('mode') ??
  document.querySelector('html')?.getAttribute('mode') ??
  'default'
