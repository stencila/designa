import { Node } from '@stencila/schema'
import { EmbedOptions, VisualizationSpec } from 'vega-embed'

const vegaMediaTypes = [
  // Custom and generic Vega mimetype used by Stencila during encoding
  'application/vnd.vega+json',
  // Altair MIME bundle types
  // @see https://iliatimofeev.github.io/altair-viz.github.io/user_guide/display_frontends.html#renderer-api
  'application/vnd.vegalite.v1+json',
  'application/vnd.vega.v3+json',
  'application/vnd.vega.v2+json',
]

export const vegaMediaType = 'application/vnd.vega+json'

export const isVegaMediaType = (mimeType: string): boolean =>
  vegaMediaTypes.includes(mimeType)

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
    node.spec !== null
  )
}
