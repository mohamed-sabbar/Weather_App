/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        cyanCustom: '#00feba', 
        violetCustom: '#5b548a',

      },
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, #00feba, #5b548a)', // Dégradé linéaire à 135°
      },
    },
  },
  plugins: [],
}

