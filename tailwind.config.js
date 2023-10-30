/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        family: 'Unbounded',
        fam:'SF Pro Display'
      },
      colors: {
          primary: {
            100:'#E9FF9D',
            200:'#FDFFA9',
            500:'#0028FB',
            
          },
          secondary:{
            100:'#6A6960',
            200:'#E9E9E9',
            300: '#F4F3F3',
            400: '#F9F9FA',
            500:'#060508',
            600: '#A5A5A5'


          },
          success: {
            100:'#00B934',
            300: '#008615',
            400:'#DFF8E5'
          },
          danger:{
            100 :'#e8c7c8',
            200:'#CC0505',
            300: '#E64303'

            
          },
          dark:{
            100:'#060508'
          },
          light:{
            100:'#F8FFDD',
            200:'#FFF',
            300: '#EBEBEB'
          }
      },
      positionAbsolute:{
        bottomless:'68'
      }
    },
  },

  plugins: [],
}