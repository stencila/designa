const path = require('path')
const postcss = require('postcss')

module.exports = (ctx) => ({
  modules: false,
  map: ctx.options.map,
  plugins: [
    require('postcss-import'),
    require('postcss-import-url')({ modernBrowser: true }),
    require('postcss-url')({ url: 'rebase' }),
    function (root) {
      return postcss([
        require('postcss-mixins')({
          mixinsDir: path.join(__dirname, 'utils', 'css', 'mixins'),
        }),
      ]).process(root)
    },
    require('tailwindcss')({
      config: path.join(__dirname, 'tailwind.config.js'),
    }),
    require('postcss-nested'),
    require('postcss-custom-properties')(),
    require('postcss-host'),
    require('cssnano'),
  ],
})
