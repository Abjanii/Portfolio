/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#f59e0b',
        dark: '#ecfeff',
        secondary: '#14b8a6',
      },
      screens: {
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
