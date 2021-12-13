export type FileFormat = {
  name: string
  ext: string | null
  aliases: string[]
}

export type FileFormatMap = Record<string, FileFormat>

export const fileFormatMap: FileFormatMap = {
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
}

/**
 * Attempts to look up a language format by the provided string.
 * Falls back to `Plain Text` if a match cannot be found.
 * @param {string} language - Can be one the format name, file extension, or one of the aliases.
 */
export const lookupFormat = (targetFormat: string): FileFormat => {
  // Standardize names to lowercase to simplify matches
  const targetFormatStandardized = targetFormat.toLowerCase()
  const resolvedFormat =
    Object.values(fileFormatMap).find(
      (formats) =>
        targetFormatStandardized === formats.name ||
        (formats.ext !== null && targetFormatStandardized === formats.ext) ||
        formats.aliases.includes(targetFormatStandardized)
    ) ?? fileFormatMap.PlainText

  return resolvedFormat
}
