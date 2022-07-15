module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'mobile': '375px',
      'desktop': '580px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        'lightCyan': 'hsl(193, 38%, 86%)',
        'darkGrayishBlue': 'hsl(217, 19%, 24%)',
        'grayishBlue': 'hsl(217, 19%, 38%)',
        'neonGreen': 'hsl(150, 100%, 66%)',
        'darkBlue':'hsl(218, 23%, 16%)'
      },
      fontFamily: {
        'manrope':['Manrope', 'sans-serif']
      },
      fontSize:{
        'quote':'28px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}