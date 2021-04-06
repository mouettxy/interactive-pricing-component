module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },

    fontWeight: {
      normal: 600,
      bold: 800,
    },

    boxShadow: {
      'slider-trigger': '0 8px 8px hsl(174, 77%, 80%)',
    },

    extend: {
      backgroundImage: {
        'title-circles': 'var(--images-title-circles)',
        'background-pattern': 'var(--images-bg-pattern)',
        'icon-slider': 'var(--images-icon-slider)',
        'icon-check': 'var(--images-icon-check)',
      },
      colors: {
        'soft-cyan': 'var(--color-soft-cyan)',
        'strong-cyan': 'var(--color-strong-cyan)',
        'light-grayish-red': 'var(--color-light-grayish-red)',
        'light-red': 'var(--color-light-red)',
        'pale-blue': 'var(--color-pale-blue)',
        white: 'var(--color-white)',
        'very-pale-blue': 'var(--color-very-pale-blue)',
        'light-grayish-blue': 'var(--color-light-grayish-blue)',
        'light-grayish-blue-2': 'var(--color-light-grayish-blue-2)',
        'grayish-blue': 'var(--color-grayish-blue)',
        'dark-desaturated-blue': 'var(--color-dark-blue)',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
