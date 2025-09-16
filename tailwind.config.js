/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*.html",
    "./src/**/*.ts"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6',
        'secondary': '#1e293b',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}