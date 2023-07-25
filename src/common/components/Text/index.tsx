import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

import { KeyOfColor, KeyOfTypography, textColor, typography } from '@/common';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  color?: KeyOfColor;
  typo: KeyOfTypography;
  children: ReactNode;
}

export function Text({
  color = 'white',
  children,
  typo,
  className,
  ...rest
}: TextProps) {
  return (
    <span
      className={clsx(typography[typo], textColor[color], className)}
      {...rest}
    >
      {children}
    </span>
  );
}
