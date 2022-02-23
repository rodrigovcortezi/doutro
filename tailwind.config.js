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
        return {
          DEFAULT: {
            css: {
              color: theme('colors.gray.200'),
              a: {
                color: theme('colors.purple'),
              },
              'h1, h2, h3, h4, h5, h6': {
                color: theme('colors.purple'),
              },
            },
          },
        }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
