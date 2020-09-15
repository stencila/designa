import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

// Update the Stylesheet version numbers in the 'globals/script.js' file.

const pkg = path.join(path.resolve(), 'package.json')
const { dependencies } = JSON.parse(readFileSync(pkg))

const stencilaVersion = dependencies['@stencila/style-stencila']
const materialVersion = dependencies['@stencila/style-material']

const globalScriptPath = path.join(
  path.resolve(),
  'src',
  'globals',
  'global.ts'
)

let globalScript = readFileSync(globalScriptPath).toString()

globalScript = globalScript.replace(
  /const stencilaThemeVersion = '.+'/,
  `const stencilaThemeVersion = '${stencilaVersion}'`
)

globalScript = globalScript.replace(
  /const materialThemeVersion = '.+'/,
  `const materialThemeVersion = '${materialVersion}'`
)

writeFileSync(globalScriptPath, globalScript)
