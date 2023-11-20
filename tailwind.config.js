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
  important: true,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
        main: 'calc(100dvh - 54px)',
        categoryBottomSheet: '90dvh',
        categoryArea: 'calc(90dvh - 200px)',
        onboardingBottomSheet: 'calc(80dvh - 220px)',
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
        main: '480px',
        ...generatorTailwindConfigList(300, 2),
      },
      maxHeight: {
        bottomSheet: '90dvh',
        bottomSheetImage: 'calc(80dvh - 220px)',
        progressBottomSheet: 'calc(90dvh - 200px)',
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
      screens: {
        'small-mobile': { raw: '(max-height: 670px),(max-width:380px)' },
      },
      animation: {
        'fade-in-back-drop': 'fade-in-back-drop 0.3s ease-in-out forwards',
        'slide-up-bottom-sheet': 'slide-up-bottom-sheet 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
