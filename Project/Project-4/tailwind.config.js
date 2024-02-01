/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'google_side':'#eaf1fb',
        'google_fontColor':'rgb(95, 99, 104)',
        'google_hoverBG':'#dde3ec',
        'google_slideOut':'#f6f8fc',
      }
    },
  },
  plugins: [],
}

