/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    daisyui: {
      themes: [
        {
          mytheme: {
        
 "primary": "#dafc2f",
          
 "secondary": "#f4d386",
          
 "accent": "#2307f4",
          
 "neutral": "#201A23",
          
 "base-100": "#FCFCFD",
          
 "info": "#39A3EA",
          
 "success": "#28BD7F",
          
 "warning": "#EDB612",
          
 "error": "#F74551"
          },
        },
      ],
    },
  plugins: [require("daisyui")],    
  }
