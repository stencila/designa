const path = require('path')

module.exports = {
  modules: false,
  plugins: [
    require('postcss-import'),
    require('postcss-import-url')({ modernBrowser: true }),
    require('postcss-url')({ url: 'rebase' }),
    require('tailwindcss')(path.join(__dirname, 'tailwind.config.js')),
    require('postcss-nested'),
    require('postcss-custom-properties')(),
    require('autoprefixer')
  ]
}
