import { IconName } from '@/common';

export type ButtonSize = 'S' | 'M' | 'L';
export type ButtonStatus = 'default' | 'pressed' | 'disabled';
export type IconPosition = 'left' | 'right';
export type ButtonTextColor = 'primaryDefault' | 'gray110' | 'gray10';
export type ButtonBackgroundColor = 'primaryDefault' | 'gray20' | 'transparent';
export type ButtonTypography =
  | 'body'
  | 'bodyBold'
  | 'subheading'
  | 'subheadingBold';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconName?: IconName;
  size?: ButtonSize;
  disabled?: boolean;
  iconPosition?: string;
  textColor?: ButtonTextColor;
  typo?: ButtonTypography;
  backgroundColor?: ButtonBackgroundColor;
  children: React.ReactNode;
}
