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
  important: true,
  theme: {
    extend: {
      colors,
      boxShadow,
      lineHeight,
      fontWeight,
      fontSize,
      borderColor: colors,
      borderWidth: {
        ...generatorTailwindConfigList(51, 1),
      },
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
      minWidth: {
        ...generatorTailwindConfigList(300, 2),
      },
      minHeight: {
        ...generatorTailwindConfigList(300, 2),
      },
      maxWidth: {
        ...generatorTailwindConfigList(300, 2),
      },
      maxHeight: {
        ...generatorTailwindConfigList(300, 2),
      },
      gap: {
        ...generatorTailwindConfigList(100, 2),
      },
      keyframes: {
        'fade-in-back-drop': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'slide-up-bottom-sheet': {
          '0%': {
            transform: 'translateY(100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-back-drop': 'fade-in-back-drop 0.3s ease-in-out forwards',
        'slide-up-bottom-sheet': 'slide-up-bottom-sheet 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
