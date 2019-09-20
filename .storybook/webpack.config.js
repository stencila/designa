const fs = require('fs')
const path = require('path')
const globby = require('globby')

const CopyPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

const files = [
  'packages/{style-stencila,style-material}/dist/**/*',
  'packages/components/dist/stencila-components.js',
  '!packages/{style-stencila,style-material}/dist/**/*.js',
  '!**/*.{png,ai,map,woff,woff2,svg,css}',
  '!**/feather.js'
]

const devFilesToWatch = [
  'packages/components/dist/stencila-components.css'
  // 'packages/components/dist/stencila-components/stencila-components.esm.js',
  // 'packages/components/dist/collection/components/**',
]

const watchedFiles =
  process.env.NODE_ENV === 'production' ? files : files.concat(devFilesToWatch)

module.exports = async ({ config }) => {
  globby
    .sync(watchedFiles, {
      ignore: ['.git', 'node_modules', '.cache']
    })
    .map(filePath => {
      const resolvedFile = path.join(__dirname, '..', filePath)
      try {
        if (fs.existsSync(resolvedFile)) {
          config.entry.push(resolvedFile)
        }
      } catch (err) {
        console.error(err)
      }
    })

  config.plugins.push(
    new CopyPlugin([
      {
        from: '**/*',
        to: './',
        context: 'packages/components/dist'
      }
    ])
  )

  config.plugins.push(new WriteFilePlugin())
  config.devServer = { stats: 'errors-only' }

  return config
}
