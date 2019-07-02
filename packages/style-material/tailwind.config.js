const { colors } = require("@stencila/brand/dist/data/colors");
const tailwind = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px"
    // },
    fontFamily: {
      display: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
      mono: ["IBM Plex Mono", "Fira Code", "monospace"]
    },
    // borderWidth: {
    //   default: "1px",
    //   "0": "0",
    //   "2": "2px",
    //   "4": "4px"
    // },
    colors: {
      neutral: tailwind.colors.gray,
      key: tailwind.colors.black,
      stock: tailwind.colors.white,
      transparent: tailwind.colors.transparent,
      ...colors.brand
    },
    extend: {
      // colors: {
      //   cyan: "#9cdbff"
      // },
      // spacing: {
      //   "96": "24rem",
      //   "128": "32rem"
      // }
    }
  }
};
