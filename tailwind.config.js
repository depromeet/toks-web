const {
  colors,
  boxShadow,
  lineHeight,
  fontWeight,
  fontSize,
} = require('./style/theme');
const {
  generatorTailwindConfigList,
} = require('./style/theme/generatorTailwindConfigList');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      boxShadow,
      lineHeight,
      fontWeight,
      fontSize,
      padding: {
        ...generatorTailwindConfigList(100, 2),
      },
      margin: {
        ...generatorTailwindConfigList(100, 2),
      },
      spacing: {
        ...generatorTailwindConfigList(100, 2),
      },
      borderRadius: {
        ...generatorTailwindConfigList(100, 2),
      },
      height: {
        ...generatorTailwindConfigList(300, 2),
      },
      width: {
        ...generatorTailwindConfigList(300, 2),
      },
    },
  },
  plugins: [],
};
