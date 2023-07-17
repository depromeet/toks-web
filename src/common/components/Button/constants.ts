import { KeyOfColor, KeyOfTypography } from '@/common';

import { BackgroundColorMap, ButtonSize, ButtonType } from './type';

export const TEXT_COLOR_BY_BUTTON_TYPE: { [key in ButtonType]: KeyOfColor } = {
  general: 'gray110',
  primary: 'gray10',
};

export const TEXT_COLOR_BY_GHOST_BUTTON_TYPE: {
  [key in ButtonType]: KeyOfColor;
} = {
  general: 'gray10',
  primary: 'primaryDefault',
};

export const BACKGROUND_COLOR_BY_BUTTON_TYPE: BackgroundColorMap = {
  default: {
    general: 'bg-gray-20',
    primary: 'bg-primary-default',
  },
  pressed: {
    general: 'active:bg-gray-40',
    primary: 'active:bg-primary-press',
  },
  disabled: {
    general: 'bg-gray-20 opacity-40',
    primary: 'bg-primary-default opacity-40',
  },
};

export const TYPO_BY_BUTTON_SIZE: { [key in ButtonSize]: KeyOfTypography } = {
  S: 'bodyBold',
  M: 'subheadingBold',
  L: 'subheadingBold',
};

export const TYPO_BY_GHOST_BUTTON_SIZE: {
  [key in ButtonSize]: KeyOfTypography;
} = {
  S: 'body',
  M: 'subheading',
  L: 'subheading',
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
