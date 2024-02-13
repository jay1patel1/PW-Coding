/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      font1: ['Kalam', "cursive"],
      font2: ['Permanent Marker', "cursive"],
      font3: ['Sixtyfour', "sans-serif"]
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          accent: "#f44236",
        },
      },
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          accent: "#f44236",
        },
      },
    ],
  },
}

