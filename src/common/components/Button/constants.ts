import { KeyOfColor, KeyOfTypography, bgColor } from '@/common';

import { ButtonColorMap, ButtonSize, ButtonType } from './type';

export const TEXT_COLOR_BY_BUTTON_TYPE: { [key in ButtonType]: KeyOfColor } = {
  general: 'gray110',
  primary: 'gray10',
};

export const BACKGROUND_COLOR_BY_BUTTON_TYPE: ButtonColorMap = {
  default: {
    general: bgColor['gray20'],
    primary: bgColor['primaryDefault'],
  },
  pressed: {
    general: bgColor['gray40'],
    primary: bgColor['primaryPress'],
  },
  disabled: {
    // 안해도 될수도 있음
    general: bgColor['gray20'],
    primary: bgColor['primaryDefault'],
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
