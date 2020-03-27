const { inset } = require('tailwindcss/defaultTheme')

const colors = {
  transparent: 'transparent',
  stock: 'var(--color-stock)',
  key: 'var(--color-key)',
  brand: 'var(--color-brand)',
  primary: {
    '100': 'var(--color-primary-100)',
    '200': 'var(--color-primary-200)',
    '300': 'var(--color-primary-300)',
    '400': 'var(--color-primary-400)',
    '500': 'var(--color-primary-500)',
    '600': 'var(--color-primary-600)',
    '700': 'var(--color-primary-700)',
    '800': 'var(--color-primary-800)',
    '900': 'var(--color-primary-900)',
  },
  neutral: {
    '100': 'var(--color-neutral-100)',
    '200': 'var(--color-neutral-200)',
    '300': 'var(--color-neutral-300)',
    '400': 'var(--color-neutral-400)',
    '500': 'var(--color-neutral-500)',
    '600': 'var(--color-neutral-600)',
    '700': 'var(--color-neutral-700)',
    '800': 'var(--color-neutral-800)',
    '900': 'var(--color-neutral-900)',
  },
  success: {
    '100': 'var(--color-success-100)',
    '200': 'var(--color-success-200)',
    '300': 'var(--color-success-300)',
    '400': 'var(--color-success-400)',
    '500': 'var(--color-success-500)',
    '600': 'var(--color-success-600)',
    '700': 'var(--color-success-700)',
    '800': 'var(--color-success-800)',
    '900': 'var(--color-success-900)',
  },
  warn: {
    '100': 'var(--color-warn-100)',
    '200': 'var(--color-warn-200)',
    '300': 'var(--color-warn-300)',
    '400': 'var(--color-warn-400)',
    '500': 'var(--color-warn-500)',
    '600': 'var(--color-warn-600)',
    '700': 'var(--color-warn-700)',
    '800': 'var(--color-warn-800)',
    '900': 'var(--color-warn-900)',
  },
  danger: {
    '100': 'var(--color-danger-100)',
    '200': 'var(--color-danger-200)',
    '300': 'var(--color-danger-300)',
    '400': 'var(--color-danger-400)',
    '500': 'var(--color-danger-500)',
    '600': 'var(--color-danger-600)',
    '700': 'var(--color-danger-700)',
    '800': 'var(--color-danger-800)',
    '900': 'var(--color-danger-900)',
  },
}

module.exports = {
  theme: {
    fontFamily: {
      display: 'var(--font-family-display)',
      body: 'var(--font-family-body)',
      mono: 'var(--font-family-mono)',
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
}
