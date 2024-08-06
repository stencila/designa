'use strict';

const fileFormatMap = {
  Bash: {
    name: 'Bash',
    ext: 'sh',
    aliases: ['bash', 'shell', 'sh'],
  },
  Calc: {
    name: 'Calc',
    ext: 'calc',
    aliases: ['calc'],
  },
  Dockerfile: {
    name: 'Dockerfile',
    ext: null,
    aliases: ['dockerfile'],
  },
  HTML: {
    name: 'HTML',
    ext: 'html',
    aliases: ['html'],
  },
  JavaScript: {
    name: 'JavaScript',
    ext: 'js',
    aliases: ['javascript', 'js'],
  },
  JSON: {
    name: 'JSON',
    ext: 'json',
    aliases: ['json'],
  },
  LaTeX: {
    name: 'LaTeX',
    ext: 'tex',
    aliases: ['latex', 'stex', 'tex'],
  },
  Markdown: {
    name: 'Markdown',
    ext: 'md',
    aliases: ['markdown', 'md'],
  },
  PlainText: {
    name: 'Plain Text',
    ext: 'txt',
    aliases: ['txt'],
  },
  PrQL: {
    name: 'PrQL',
    ext: 'prql',
    aliases: ['prql'],
  },
  Python: {
    name: 'Python',
    ext: 'py',
    aliases: ['python', 'py', 'ipynb'],
  },
  R: {
    name: 'R',
    ext: 'r',
    aliases: ['r'],
  },
  'R Markdown': {
    name: 'R Markdown',
    ext: 'rmd',
    aliases: ['rmd', 'r markdown', 'rmarkdown'],
  },
  SQL: {
    name: 'SQL',
    ext: 'sql',
    aliases: ['sql'],
  },
  TOML: {
    name: 'TOML',
    ext: 'toml',
    aliases: ['toml'],
  },
  TypeScript: {
    name: 'TypeScript',
    ext: 'ts',
    aliases: ['typescript', 'ts'],
  },
  XML: {
    name: 'XML',
    ext: 'xml',
    aliases: ['xml'],
  },
  YAML: {
    name: 'YAML',
    ext: 'yaml',
    aliases: ['yaml'],
  },
  ZSH: {
    name: 'ZSH',
    ext: 'zsh',
    aliases: ['zsh'],
  },
};
/**
 * Attempts to look up a language format by the provided string.
 * Falls back to `Plain Text` if a match cannot be found.
 * @param {string} language - Can be one the format name, file extension, or one of the aliases.
 */
const lookupFormat = (targetFormat) => {
  var _a;
  // Standardize names to lowercase to simplify matches
  const targetFormatStandardized = targetFormat.toLowerCase();
  const resolvedFormat = (_a = Object.values(fileFormatMap).find((formats) => targetFormatStandardized === formats.name ||
    (formats.ext !== null && targetFormatStandardized === formats.ext) ||
    formats.aliases.includes(targetFormatStandardized))) !== null && _a !== void 0 ? _a : fileFormatMap.PlainText;
  return resolvedFormat;
};

const languageUtils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fileFormatMap: fileFormatMap,
  lookupFormat: lookupFormat
});

exports.fileFormatMap = fileFormatMap;
exports.languageUtils = languageUtils;
exports.lookupFormat = lookupFormat;

//# sourceMappingURL=languageUtils-85e2591f.js.map