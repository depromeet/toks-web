const { withTV } = require('tailwind-variants/transformer');

const {
  colors,
  boxShadow,
  lineHeight,
  fontWeight,
  fontSize,
} = require('./style/theme');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors, boxShadow, lineHeight, fontWeight, fontSize },
  },
  plugins: [],
});
