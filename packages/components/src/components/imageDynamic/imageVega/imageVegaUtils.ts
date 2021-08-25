import { Node } from '@stencila/schema'
import { EmbedOptions, VisualizationSpec } from 'vega-embed'

// Custom and generic Vega media type used by Stencila when encoding to HTML
export const vegaMediaType = 'application/vnd.vega+json'

// Match against any version of either the Vega or VegaLite media types 
export const isVegaMediaType = (mimeType: string): boolean =>
  /^application\/vnd\.(vega|vega-?lite)\./.test(mimeType)

/**
 * RegEx to parse a Vega Spec `$schema` url and find the library and version number used
 * Group 1: library used `vega` or `vega-lite | vegalite`
 * Group 2: version number used
 */
const VegaVersionRegEx = /(vega|vega-?lite)[/.]v([0-9]+(?:\.[0-9]){0,2})/

export type VegaLibType = 'vega' | 'vega-lite'

export type VegaLoadEvent = {
  library: VegaLibType
}

export type VegaDependency = {
  library: VegaLibType
  version: string
}

const vegaLibraryGuard = (library: string): VegaLibType => {
  return library === 'vega' || library === 'vega-lite' ? library : 'vega'
}

/**
 * Given a string, attempts to find the Vega library (`vega` vs `vega-lite`)
 * and the version being used.
 * Falls back to `vega` and `latest`.
 */
export const getVegaVersion = (input = ''): VegaDependency => {
  const [, lib = 'vega', version = 'latest'] =
    VegaVersionRegEx.exec(input) ?? []

  const libStandardized = lib.replace('vegalite', 'vega-lite')
  const library = vegaLibraryGuard(libStandardized)

  return {
    library,
    version,
  }
}

export const getVegaLibSrc = ({ library, version }: VegaDependency): string => {
  return `https://unpkg.com/${library}@${version}`
}

export interface VegaObject {
  spec: VisualizationSpec | string
  options?: Partial<EmbedOptions>
}

export interface VegaNode extends VegaObject {
  mediaType: string
}

export const isVegaObject = (node: Node): node is VegaNode => {
  return (
    typeof node === 'object' &&
    node !== null &&
    'mediaType' in node &&
    isVegaMediaType(node.mediaType) &&
    Object.prototype.hasOwnProperty.call(node, 'spec') &&
    (node as Record<string, unknown>).spec !== null
  )
}
