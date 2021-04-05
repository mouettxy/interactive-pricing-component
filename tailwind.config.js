module.exports = {
  darkMode: false,
  plugins: [require('@tailwindcss/forms')],
  theme: {
    screens: {
      sm: '375px',
      lg: '1440px',
    },

    fontWeight: {
      normal: 600,
      bold: 800,
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
  },
}

/*

- Soft Cyan (Full Slider Bar): hsl(174, 77%, 80%)
- Strong Cyan (Slider Backround): hsl(174, 86%, 45%)
- Light Grayish Red (Discount Background): hsl(14, 92%, 95%)
- Light Red (Discount Text): hsl(15, 100%, 70%)
- Pale Blue (CTA Text): hsl(226, 100%, 87%)

- White (Pricing Component Background): hsl (0, 0%, 100%)
- Very Pale Blue (Main Background): hsl(230, 100%, 99%)
- Light Grayish Blue (Empty Slider Bar): hsl(224, 65%, 95%)
- Light Grayish Blue (Toggle Background): hsl(223, 50%, 87%)
- Grayish Blue (Text): hsl(225, 20%, 60%)
- Dark Desaturated Blue (Text & CTA Background): hsl(227, 35%, 25%)

*/
