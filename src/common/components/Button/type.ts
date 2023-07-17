import { IconName, ValueOfColor } from '@/common';

export type ButtonType = 'primary' | 'general';
export type ButtonSize = 'S' | 'M' | 'L';
export type ButtonStatus = 'default' | 'pressed' | 'disabled';

export type ButtonColorMap = {
  [key in ButtonStatus]: {
    [key in ButtonType]: ValueOfColor;
  };
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
  iconName?: IconName;
  buttonType?: ButtonType;
  width?: number;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
}
