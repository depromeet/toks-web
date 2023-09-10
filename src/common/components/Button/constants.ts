import { ButtonBackgroundColor, ButtonSize } from './type';

export const PRESSED_BACKGROUND_BY_COLOR: {
  [key in ButtonBackgroundColor]: string;
} = {
  gray20: 'active:bg-gray-40',
  gray70: 'active:bg-gray-70',
  primaryDefault: 'active:bg-primary-press',
  transparent: 'active:bg-transparent',
};

export const ICON_BY_BUTTON_SIZE: { [key in ButtonSize]: number } = {
  S: 16,
  M: 24,
  L: 24,
};

export const HEIGHT_BY_BUTTON_SIZE: { [key in ButtonSize]: string } = {
  S: 'h-32px',
  M: 'h-40px',
  L: 'h-48px',
};

export const PADDING_BY_BUTTON_SIZE: { [key in ButtonSize]: string } = {
  S: 'px-12px',
  M: 'px-16px',
  L: 'px-16px',
};

export const GAP_BY_BUTTON_SIZE: { [key in ButtonSize]: string } = {
  S: 'gap-4px',
  M: 'gap-8px',
  L: 'gap-8px',
};
