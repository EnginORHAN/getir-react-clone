/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: theme =>({
        'brand-color':'#4c3398',
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7',
        'brand-yellow': '#ffd300'
      }),
      backgroundImage:{
        'campains-bg':"url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')"
      }
    },
  },
  plugins: [],
}