import { bgColor } from './bgColor';
import { textColor } from './textColor';

// export type KeyOfShadows = keyof typeof shadows;
// export type KeyofTheme = keyof typeof theme;
export type KeyOfBgColors = keyof typeof bgColor;
export type KeyOfTextColors = keyof typeof textColor;

export const theme = {
  bgColor,
  textColor,
};
