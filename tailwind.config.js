/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        brand:{
          700: '#232F4D',
          900: '#10182c'
        },
        'wpp-green': '#3CB529',
        'wpp-green-dark': '#1F6E13'
      },
      fontSize: {
        'sm': '0.8rem',
        'base': '1rem',
        'xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '2.5rem',
        '6xl': '3.052rem',
      },
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
      }
    }
  },
  plugins: [],
}




