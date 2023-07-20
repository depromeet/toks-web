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
  iconPosition?: IconPosition;
  textColor?: ButtonTextColor;
  /**
   * @Note
   * 버튼의 사이즈가 S이면 body 이고
   * M, L이면 subheading 입니다.
   * 배경이 있는 버튼의 경우 Bold를 붙여주세요.
   */
  typo?: ButtonTypography;
  backgroundColor?: ButtonBackgroundColor;
  children: React.ReactNode;
}
