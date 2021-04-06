module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: { min: '1px', max: '375px' },
      lg: { min: '376px', max: '1980px' },
    },

    fontWeight: {
      normal: 600,
      bold: 800,
    },

    boxShadow: {
      'slider-trigger': '0 8px 8px hsl(174, 77%, 80%)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },

    backgroundSize: {
      '100-50': '100% 50%',
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
