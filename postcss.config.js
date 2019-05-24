module.exports = {
  modules: false,
  plugins: {
    "postcss-parcel-import": true,
    "postcss-import": {
      addModulesDirectories: ["./node_modules/@stencila"]
    },
    tailwindcss: true,
    "postcss-nested": true,
    "postcss-custom-properties": true,
    autoprefixer: true
  }
}
