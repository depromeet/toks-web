const {
  colors,
  boxShadow,
  lineHeight,
  fontWeight,
  fontSize,
} = require('./style/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: { colors, boxShadow, lineHeight, fontWeight, fontSize },
  },
  plugins: [],
};
