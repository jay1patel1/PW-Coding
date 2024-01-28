/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./task/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '4k': '2800px',
      }
    },
  },
  plugins: [],
}

