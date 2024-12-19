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
        bindumathi: ['fmBindumathi']
      },
      colors:{
        'gray':'#636363'
      }
    },
  },
  plugins: [],
};
