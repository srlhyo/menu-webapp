const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.jsx", "./index.html"],
  theme: {
    extend: {
      width: {
        'custom': '99%'
      },
      height: {
        '229px': '229px',
      },
      fontFamily: {
        open : "'Open Sans', sans-serif",
        acumin: 'acumin',
        segoe: 'segoe',
      },
      colors: {
        // gray: colors.gray,
        'black': '#000000',
        'golden': '#c8a767',
        'hotel-corn': {
          '50': '#faf9f7', 
          '100': '#f5f3ef', 
          '200': '#e7e2d6', 
          '300': '#d8d0be', 
          '400': '#bbad8d', 
          '500': '#9e8a5c', 
          '600': '#8e7c53', 
          '700': '#776845', 
          '800': '#5f5337', 
          '900': '#4d442d'
        },
        'modal-close': {
          '50': 'rgba(0, 0, 0, 0.9)'
        }
      },
      keyframes: {
        'grow-box': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        }
      },
      animation: {
        'grow-box': 'grow-box 1s ease-in-out'
      }
    },
  },
  plugins: [],
}