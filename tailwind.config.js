/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'robo': ['Roboto Slab', 'serif'],
        'Niramit': ['Niramit'],
        'Philosopher': ['Philosopher']
      },

      colors : {
        'dr-1': '#05386B',
        'dr-2': '#379683',
        'li-1': '#5CDB95',
        'li-2': '#8EE4Af',
        wite: '#EDF5E1',
        black: '#000000',
        orange: '#FF9F29',
        cream: '#FAF3E3',
        dark: '#071E3D',
        blue: '#1F4287',
        green: '#278EA5',
        light: '#21E6C1'
     }


    },
  },
  plugins: [],
}
