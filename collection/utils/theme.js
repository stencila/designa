import { ThemeColors } from '../types';
const isColorVariable = (color) => {
  switch (color) {
    case ThemeColors.brand:
    case ThemeColors.danger:
    case ThemeColors.key:
    case ThemeColors.neutral:
    case ThemeColors.primary:
    case ThemeColors.stock:
    case ThemeColors.success:
    case ThemeColors.warn:
      return true;
    default:
      return false;
  }
};
const colorValueRegex = new RegExp(/\d00/);
const startsWithColorVariable = (color) => {
  const [name, value] = color.split('-');
  return isColorVariable(name) && colorValueRegex.test(value);
};
/**
 * Given a string value, tries to return a CSS color variable from the Theme palette
 *
 * @function getColor
 * @param {string|Colors} color - A keyword from the Theme palette (`primary`, `success`, etc.)
 * - a keyword with a
 * specific value (e.g. `primary-200`, `success-800`, etc.),
 * - or a valid CSS color value (`#FFFF99`, `rgba(0, 0, 0, 0.2)`).
 * @return {string} Either a a CSS variable from the Theme palette, or the original argument
 */
export const getColor = (color) => {
  if (color.startsWith('--')) {
    // Color is a CSS variable
    return `var(${color})`;
  }
  else if (color.startsWith('#') || color.startsWith('rgb')) {
    // Color is a CSS color value
    return color;
  }
  else if (isColorVariable(color)) {
    // Color is a keyword from the color palette
    return `var(--color-${color}-500)`;
  }
  else if (startsWithColorVariable(color)) {
    // Color is a specific color tint/shade from the color palette (e.g. primary-200)
    return `var(--color-${color})`;
  }
  else {
    return color;
  }
};
