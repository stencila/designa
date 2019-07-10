const path = require('path')
const fs = require('fs')

const tailwindConfigPath = path.join(process.env.INIT_CWD, 'tailwind.config.js')
const conf = fs.existsSync(tailwindConfigPath) ? tailwindConfigPath : undefined

module.exports = {
  modules: false,
  plugins: [
    require('postcss-import'),
    require('postcss-import-url')({ modernBrowser: true }),
    require('postcss-url')({ url: 'rebase' }),
    require('tailwindcss')(conf),
    require('postcss-nested'),
    require('postcss-custom-properties'),
    require('autoprefixer')
  ]
}
