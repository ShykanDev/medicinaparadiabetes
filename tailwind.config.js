/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'spicy-rice': ['Spicy Rice', 'sans-serif'],
        'varela': ['Varela Round', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
