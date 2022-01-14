export enum ThemeColors {
  brand = 'brand',
  danger = 'danger',
  key = 'key',
  neutral = 'neutral',
  primary = 'primary',
  stock = 'stock',
  success = 'success',
  warn = 'warn',
}

type ThemeColorNames =
  | 'brand'
  | 'danger'
  | 'key'
  | 'neutral'
  | 'primary'
  | 'stock'
  | 'success'
  | 'warn'

type ThemeColorScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type Colors = ThemeColorNames | `${ThemeColorNames}-${ThemeColorScale}`
