const languageAliases: Record<string, string[]> = {
  Bash: ['bash', 'shell', 'sh'],
  Dockerfile: ['dockerfile'],
  JavaScript: ['javascript', 'js'],
  JSON: ['json'],
  LaTeX: ['latex', 'stex', 'tex'],
  Markdown: ['markdown', 'md'],
  Python: ['python', 'py'],
  R: ['r'],
  RMD: ['rmd'],
  'Plain Text': ['txt'],
  TOML: ['toml'],
  XML: ['xml'],
  YAML: ['yaml'],
}

export const defaultLanguageCapabilities: string[] =
  Object.keys(languageAliases)

// Attempts to look up a language based on file extension aliases,
// falling back to `Plain Text` if none can be found.
export const languageByAlias = (
  languageName: string
): keyof typeof languageAliases => {
  // Standardize names to lowercase to simplify matches
  const lowerCaseName = languageName.toLowerCase()
  const [resolvedName] =
    Object.entries(languageAliases).find(([_name, aliases]) =>
      aliases.includes(lowerCaseName)
    ) ?? []

  return resolvedName ?? 'Plain Text'
}
