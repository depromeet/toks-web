import {
  KeyOfColor,
  KeyOfTypography,
  textColor,
  typography,
} from '@/common/foundation';
import { HTMLAttributes, ReactNode } from 'react';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  color?: KeyOfColor;
  typo: KeyOfTypography;
  children: ReactNode;
}

export function Text({ color = 'white', children, typo, ...rest }: TextProps) {
  return (
    <span className={`${typography[typo]} ${textColor[color]}`} {...rest}>
      {children}
    </span>
  );
}
