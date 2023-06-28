import { HTMLAttributes, ReactNode } from 'react';

import {
  KeyOfColor,
  KeyOfTypography,
  color,
  typography,
} from '@/common/foundation';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  color?: KeyOfColor;
  typo: KeyOfTypography;
  children: ReactNode;
}

export function Text({ color = 'white', children, typo, ...rest }: TextProps) {
  return (
    <span className={typography[typo]} {...rest}>
      {children}
    </span>
  );
}
