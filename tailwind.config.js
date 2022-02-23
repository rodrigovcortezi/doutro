const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#f6f6f6',
        background: {
          900: '#111111',
          800: '#191919',
          700: '#242424',
          600: '#2e2e2e',
        },
        gray: {
          900: '#111111',
          800: '#191919',
          700: '#242424',
          600: '#2e2e2e',
          200: '#b1b1b1',
        },
        purple: '#914ad9',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        tiny: '.625rem',
        sm: '.75rem',
      },
      typography: ({theme}) => {
        const fontSize = size => {
          const result = theme(`fontSize.${size}`)
          return Array.isArray(result) ? result[0] : result
        }
        return {
          DEFAULT: {
            css: {
              color: theme('colors.gray.200'),
              a: {
                color: theme('colors.purple'),
                textDecoration: 'none',
              },
              'a:hover, a:focus': {
                textDecoration: 'underline',
                outline: 'none',
              },
              strong: {
                color: theme('colors.white'),
                fontWeight: theme('fontWeight.medium'),
              },
              'h1, h2, h3, h4, h5, h6': {
                color: theme('colors.purple'),
                fontWeight: theme('fontWeight.semibold'),
              },
              'h1, h2': {
                fontSize: fontSize('xl'),
                marginTop: theme('spacing.16'),
                marginBottom: theme('spacing.8'),
                [`@media (min-width: ${theme('screens.lg')})`]: {
                  fontSize: fontSize('2xl'),
                },
              },
              h3: {
                fontSize: fontSize('lg'),
                marginTop: theme('spacing.14'),
                marginBottom: theme('spacing.7'),
              },
              'code, a > code': {
                color: theme('colors.white'),
              },
              img: {
                // images are wrapped in <p>, which already has margin
                marginTop: 0,
                marginBottom: 0,
                borderRadius: theme('borderRadius.lg'),
                width: '100%',
                maxWidth: theme('maxWidth.4xl'),
                marginLeft: 'auto',
                marginRight: 'auto',
              },
            },
          },
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
