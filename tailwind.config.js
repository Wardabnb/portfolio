/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
       
        "about-h1":"#8576FF",
        "about-text":"#ccc",
        "work-bg":"#E6DAF9",
        "first":"#8ca0de",
        "hover-btn":"#0056b3",
        "footer":"#333"
    
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      screens: {
        "sm": "576px",
        "xs": "0px",
        "md":"768px",
        "lg": "992px",
        "xs":"300px"
      },
    
      
    },
  },
  plugins: [],
}
