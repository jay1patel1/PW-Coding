/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yGray: "#383b33",
        yBlue: "#065fd4",
      }
    },
    fontFamily: {
      Oswald: ["Oswald", "sans-serif"],
      Roboto: ["Roboto", "sans-serif"]
    }
  },
  plugins: [],
}

