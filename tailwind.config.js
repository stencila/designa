const defaultColors = {
  transparent: 'transparent',
  current: 'currentColor',

  stock: '#fff',
  key: '#4a4a4a',

  brand: '#2568ef',
  accent: '#66ff66',

  neutral: {
    50: '#e9eaf1',
    100: '#cfd2e1',
    200: '#b6bacf',
    300: '#9da3bc',
    400: '#858ca8',
    500: '#6e7591',
    600: '#595f78',
    700: '#444a5e',
    800: '#313543',
    900: '#1f212a',
    1000: '#0c0d10',
  },

  primary: {
    50: '#ebecff',
    100: '#cacfff',
    200: '#a7b3ff',
    300: '#7f98ff',
    400: '#527fff',
    500: '#2069f2',
    600: '#0054cf',
    700: '#0041a2',
    800: '#132f71',
    900: '#161e41',
    1000: '#0c0d18',
  },

  success: {
    50: '#edf6ef',
    100: '#c4e0cb',
    200: '#9dcaa9',
    300: '#79b389',
    400: '#589c6d',
    500: '#3c8455',
    600: '#286c41',
    700: '#1b5430',
    800: '#143d23',
    900: '#102617',
    1000: '#071009',
  },

  warn: {
    50: '#fff3cc',
    100: '#ffeaaa',
    200: '#ffde88',
    300: '#ffcf69',
    400: '#f6bc4d',
    500: '#dca435',
    600: '#ba8925',
    700: '#926b1b',
    800: '#674c15',
    900: '#3c2d11',
    1000: '#140f05',
  },

  danger: {
    50: '#ffeff0',
    100: '#ffcace',
    200: '#ffa6ae',
    300: '#f88391',
    400: '#e76276',
    500: '#cf445e',
    600: '#b02d4a',
    700: '#8c1f38',
    800: '#651828',
    900: '#3e131a',
    1000: '#1a090a',
  },
}

const generateColors = (name, defaultName) => ({
  50: `var(--color-${name}-50, ${defaultColors[defaultName][50]})`,
  100: `var(--color-${name}-100, ${defaultColors[defaultName][100]})`,
  200: `var(--color-${name}-200, ${defaultColors[defaultName][200]})`,
  300: `var(--color-${name}-300, ${defaultColors[defaultName][300]})`,
  400: `var(--color-${name}-400, ${defaultColors[defaultName][400]})`,
  500: `var(--color-${name}-500, ${defaultColors[defaultName][500]})`,
  600: `var(--color-${name}-600, ${defaultColors[defaultName][600]})`,
  700: `var(--color-${name}-700, ${defaultColors[defaultName][700]})`,
  800: `var(--color-${name}-800, ${defaultColors[defaultName][800]})`,
  900: `var(--color-${name}-900, ${defaultColors[defaultName][900]})`,
  1000: `var(--color-${name}-1000, ${defaultColors[defaultName][1000]})`,
})

const colors = {
  transparent: defaultColors.transparent,
  current: defaultColors.current,
  stock: `var(--color-stock, ${defaultColors.stock})`,
  key: `var(--color-key, ${defaultColors.key})`,
  brand: `var(--color-brand, #1d63f3)`,
  accent: `var(--color-accent, #1d63f3)`,
  primary: generateColors('primary', 'primary'),
  neutral: generateColors('neutral', 'neutral'),
  success: generateColors('success', 'success'),
  warn: generateColors('warn', 'warn'),
  danger: generateColors('danger', 'danger'),
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
