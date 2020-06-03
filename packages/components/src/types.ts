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

export type Colors = keyof typeof ThemeColors
