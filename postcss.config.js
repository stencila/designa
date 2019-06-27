const path = require("path");

let packagePath;
try {
  packagePath = require.resolve("@stencila/style-core");
} catch (error) {
  packagePath = path.join(__dirname, "packages", "style-core");
}

const tailwindConfigPath = path.join(packagePath, "tailwind.config.js");

let plugins = [
  require("postcss-import"),
  require("postcss-nested"),
  require("postcss-custom-properties"),
  require("autoprefixer")
];

if (process.env.INIT_CWD.indexOf("packages/brand") === -1) {
  plugins = [
    require("postcss-import"),
    require("tailwindcss")(tailwindConfigPath),
    require("postcss-nested"),
    require("postcss-custom-properties"),
    require("autoprefixer")
  ];
}

module.exports = {
  modules: false,
  plugins
};
