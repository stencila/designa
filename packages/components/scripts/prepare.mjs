import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

// Update the Stylesheet version numbers in the 'utils/variables.ts' file.

const pkg = path.join(path.resolve(), 'package.json')
const { dependencies } = JSON.parse(readFileSync(pkg))

const stencilaVersion = dependencies['@stencila/style-stencila']
const materialVersion = dependencies['@stencila/style-material']

const variablesScriptPath = path.join(
  path.resolve(),
  'src',
  'utils',
  'variables.ts'
)

let variablesScript = readFileSync(variablesScriptPath).toString()

variablesScript = variablesScript.replace(
  /const stencilaThemeVersion = '.+'/,
  `const stencilaThemeVersion = '${stencilaVersion}'`
)

variablesScript = variablesScript.replace(
  /const materialThemeVersion = '.+'/,
  `const materialThemeVersion = '${materialVersion}'`
)

writeFileSync(variablesScriptPath, variablesScript)
