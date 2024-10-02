/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        100:"100px",
        200:"200px",
      },
      colors: {
        "bog": "#09c"
      }
    },
  }, 
  plugins: [],
  darkMode: 'class'
}