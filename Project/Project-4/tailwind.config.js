/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'g_LightBlue':'#eaf1fb',
        'g_LightBlueSelect':'#d3e3fd',
        'g_BleCompose':'#c2e7ff',
        'g_BGGray':'#f6f8fc',
        'g_inbox':'#f2f6fc',
        'g_Oranges':'#f4b400',
        'g_fonts':'#616469',
        'g_white':'#ffffff',
        'g_grayHover' : '#dadce0',
        'g_active' : '#eaf1fb',
        'g_icon_select' : '#041e49',
        'g_icon' : '#444746',
        'g_active_hover' : '#e4ecf8',
        'g_red' : '#b3261e',
      }
    },
  },
  plugins: [],
}

