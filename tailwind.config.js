/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        brightPink: 'rgb(230,57,70)',
        lightBlue: 'rgb(242,250,238)',
        cityBlue: 'rgb(168,218,220)',
        mainBlue: 'rgb(69,123,157)',
        darkBlue: 'rgb(29,53,87)'
      }
    },
  },
  plugins: [],
}
