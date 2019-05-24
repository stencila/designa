import foo from "./data/colors.json"

export const brand = () =>
  console.log("yp, this brand", JSON.stringify(foo, null, 2))
