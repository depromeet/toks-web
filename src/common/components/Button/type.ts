import { IconName } from '@/common';

export type ButtonType = 'primary' | 'general';
export type ButtonSize = 'S' | 'M' | 'L';
export type ButtonStatus = 'default' | 'pressed' | 'disabled';

export type ButtonColorMap = {
  [key in ButtonStatus]: {
    [key in ButtonType]: string;
  };
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconName?: IconName;
  buttonType?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
}
