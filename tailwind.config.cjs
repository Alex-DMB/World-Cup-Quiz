/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      screens:{
        'responsive': {'max': '800px'},
      },
      colors:{
        primary:{
          '300':'#FF1758',
          '400':'#E5154F',
          '500':'#B2103D',
          '700':'#59081F',
          '800':'#330511',
          '900':'#25040d',
        },
        
        'gold':'#FFC979',
        'background':'#0C0C0C',

        correct:{
          '500':'#4ADE80',
          '700':'#16A34A',
        },

        wrong:{
          '500':'#D93636',
          '700':'#990F0F',
        },
      },
    },
  },
  plugins: [],
}
