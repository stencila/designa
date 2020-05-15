const { inset, colors: defaultColors } = require('tailwindcss/defaultTheme')

const generateColors = (name, defaultName) => ({
  '100': `var(--color-${name}-100, ${defaultColors[defaultName][100]})`,
  '200': `var(--color-${name}-200, ${defaultColors[defaultName][200]})`,
  '300': `var(--color-${name}-300, ${defaultColors[defaultName][300]})`,
  '400': `var(--color-${name}-400, ${defaultColors[defaultName][400]})`,
  '500': `var(--color-${name}-500, ${defaultColors[defaultName][500]})`,
  '600': `var(--color-${name}-600, ${defaultColors[defaultName][600]})`,
  '700': `var(--color-${name}-700, ${defaultColors[defaultName][700]})`,
  '800': `var(--color-${name}-800, ${defaultColors[defaultName][800]})`,
  '900': `var(--color-${name}-900, ${defaultColors[defaultName][900]})`,
})

const colors = {
  transparent: 'transparent',
  stock: `var(--color-stock, ${defaultColors.white})`,
  key: `var(--color-key, ${defaultColors.black})`,
  brand: `var(--color-brand, #1d63f3)`,
  primary: generateColors('primary', 'blue'),
  neutral: generateColors('neutral', 'gray'),
  success: generateColors('success', 'green'),
  warn: generateColors('warn', 'orange'),
  danger: generateColors('danger', 'red'),
}

module.exports = {
  purge: false, // Any style purging should be done in apps consuming these themes
  theme: {
    fontFamily: {
      display: 'var(--font-family-display, sans-serif)',
      body: 'var(--font-family-body, sans-serif)',
      mono: 'var(--font-family-mono, monospace)',
    },
    colors,
    extend: {
      inset: {
        '1/2': '50%',
      },
      fill: colors,
      stroke: colors,
      maxHeight: {
        em: '1em',
      },
      maxWidth: {
        0: '0',
      },
      minWidth: {
        em: '1em',
      },
    },
  },
  corePlugins: {
    backgroundOpacity: false,
    borderOpacity: false,
    placeholderOpacity: false,
    textOpacity: false,
  },
}
