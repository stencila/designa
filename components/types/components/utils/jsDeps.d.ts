/** Inject the Asset.js script tag if it hasn't been requested yet */
export declare const injectScriptSrc: ({ src, onInit, onLoad, }: {
  src: string;
  onInit?: (() => void) | undefined;
  onLoad: (e: Event) => void;
}) => void;
