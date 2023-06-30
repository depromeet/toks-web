const { colors } = require('./style/theme/colors');
const { shadows } = require('./style/theme/shadows');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {colors , boxShadow: shadows},
  },
  plugins: [],
}

