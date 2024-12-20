/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        emanee: ['fmEmanee'],
        bindumathi: ['fmBindumathi'],
        emanee4u:['fmEmanee4u']
      },
      colors:{
        'gray':'#636363',
        'gray2':'#787575'
      }
    },
  },
  plugins: [],
};
