/** Check if the required asset tag is present in the document */
const isScriptPresent = (src: string): boolean =>
  document.querySelector(`head script[src="${src}"]`) !== null

/** Inject the Asset.js script tag if it hasn't been requested yet */
export const injectScriptSrc = ({
  src,
  onInit,
  onLoad,
}: {
  src: string
  onInit?: () => void
  onLoad: (e: Event) => void
}): void => {
  if (isScriptPresent(src)) return

  const script = document.createElement('script')
  script.setAttribute('src', src)
  onInit?.()

  script.addEventListener('load', onLoad)

  document.querySelector<HTMLHeadElement>('head')?.appendChild(script)
}
