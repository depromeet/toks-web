const { withTV } = require('tailwind-variants/transformer');

const { colors } = require('./style/theme/colors');
const { shadows } = require('./style/theme/shadows');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors, shadows },
  },
  plugins: [],
});
