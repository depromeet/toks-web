import { KeyOfColor, KeyOfTypography } from '@/common';

import { ButtonColorMap, ButtonSize, ButtonType } from './type';

export const TEXT_COLOR_BY_BUTTON_TYPE: { [key in ButtonType]: KeyOfColor } = {
  general: 'gray110',
  primary: 'gray10',
};

export const BACKGROUND_COLOR_BY_BUTTON_TYPE: ButtonColorMap = {
  default: {
    general: 'gray20',
    primary: 'primaryDefault',
  },
  pressed: {
    general: 'gray40',
    primary: 'primaryPress',
  },
  disabled: {
    // 안해도 될수도 있음
    general: 'gray20',
    primary: 'primaryDefault',
  },
};

export const TYPO_BY_BUTTON_SIZE: { [key in ButtonSize]: KeyOfTypography } = {
  S: 'bodyBold',
  M: 'subheadingBold',
  L: 'subheadingBold',
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
