const fs = require('fs')
const path = require('path')
const globby = require('globby')

const CopyPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')

module.exports = async ({ config }) => {
  globby
    .sync(
      [
        'packages/{style-stencila,style-material}/dist/**/*',
        'packages/components/dist/stencila-components.js',
        // 'packages/components/dist/stencila-components.css',
        // 'packages/components/dist/stencila-components/stencila-components.esm.js',
        'packages/components/dist/collection/components/**',
        '!packages/{style-stencila,style-material}/dist/**/*.js',
        '!**/*.{png,ai,map,woff,woff2,svg,css}'
      ],
      {
        ignore: ['.git', 'node_modules', '.cache']
      }
    )
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
