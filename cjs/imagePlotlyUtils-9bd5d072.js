'use strict';

const schema = require('./schema-fcf985c7.js');

// Custom and generic Vega media type used by Stencila when encoding to HTML
const vegaMediaType = 'application/vnd.vega+json';
// Match against any version of either the Vega or VegaLite media types
const isVegaMediaType = (mimeType = '') => /^application\/vnd\.(vega|vega-?lite)\./.test(mimeType);
const nodeHasSpec = (node) => {
  return Object.prototype.hasOwnProperty.call(node, 'spec');
};
/**
 * RegEx to parse a Vega Spec `$schema` url and find the library and version number used
 * Group 1: library used `vega` or `vega-lite | vegalite`
 * Group 2: version number used
 */
const VegaVersionRegEx = /(vega|vega-?lite)[/.]v([0-9]+(?:\.[0-9]){0,2})/;
const vegaLibraryGuard = (library) => {
  return library === 'vega' || library === 'vega-lite' ? library : 'vega';
};
/**
 * Given a string, attempts to find the Vega library (`vega` vs `vega-lite`)
 * and the version being used.
 * Falls back to `vega` and `latest`.
 */
const getVegaVersion = (input = '') => {
  var _a;
  const [, lib = 'vega', version = 'latest'] = (_a = VegaVersionRegEx.exec(input)) !== null && _a !== void 0 ? _a : [];
  const libStandardized = lib.replace('vegalite', 'vega-lite');
  const library = vegaLibraryGuard(libStandardized);
  return {
    library,
    version,
  };
};
const getVegaLibSrc = ({ library, version }) => {
  return `https://unpkg.com/${library}@${version}`;
};
const isVegaObject = (node) => {
  return (schema.Ke('MediaObjectTypes', node) &&
    isVegaMediaType(node.mediaType) &&
    nodeHasSpec(node) &&
    node.spec !== null);
};

const plotlyMediaType = 'application/vnd.plotly.v1+json';
const isPlotlyObject = (node) => {
  return (typeof node === 'object' &&
    node !== null &&
    'mediaType' in node &&
    node.mediaType === plotlyMediaType);
};

exports.getVegaLibSrc = getVegaLibSrc;
exports.getVegaVersion = getVegaVersion;
exports.isPlotlyObject = isPlotlyObject;
exports.isVegaObject = isVegaObject;
exports.plotlyMediaType = plotlyMediaType;
exports.vegaMediaType = vegaMediaType;
