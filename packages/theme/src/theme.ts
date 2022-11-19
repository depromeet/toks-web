import { colors } from './colors';
import { shadows } from './shadows';

export type KeyOfShadows = keyof typeof shadows;
export type KeyofTheme = keyof typeof theme;
export type KeyOfColors = keyof typeof colors;

export const theme = {
  colors,
  shadows,
};
