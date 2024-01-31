import { Colors } from '../types';
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
export declare const getColor: (color: string | Colors) => string;
