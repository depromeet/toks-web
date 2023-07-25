'use client';

import Image from 'next/image';

import { ICON_URL, Text, bgColor, cn } from '@/common';

import {
  GAP_BY_BUTTON_SIZE,
  HEIGHT_BY_BUTTON_SIZE,
  ICON_BY_BUTTON_SIZE,
  PADDING_BY_BUTTON_SIZE,
  PRESSED_BACKGROUND_BY_COLOR,
} from './constants';
import { ButtonProps } from './type';

export function Button({
  iconName,
  className,
  textColor = 'gray10',
  backgroundColor = 'transparent',
  size = 'S',
  typo = 'body',
  iconPosition = 'RIGHT',
  disabled = false,
  children,
  'aria-label': ariaLabel,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        className,
        HEIGHT_BY_BUTTON_SIZE[size],
        PADDING_BY_BUTTON_SIZE[size],
        GAP_BY_BUTTON_SIZE[size],
        bgColor[backgroundColor],
        disabled ? 'opacity-40' : PRESSED_BACKGROUND_BY_COLOR[backgroundColor],
        'flex items-center justify-center rounded-8px'
      )}
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      {iconName && iconPosition === 'LEFT' && (
        <Image
          width={ICON_BY_BUTTON_SIZE[size]}
          height={ICON_BY_BUTTON_SIZE[size]}
          src={ICON_URL[iconName]}
          alt="버튼 아이콘 입니다."
        />
      )}
      <Text typo={typo} color={textColor} aria-hidden={Boolean(ariaLabel)}>
        {children}
      </Text>
      {iconName && iconPosition === 'RIGHT' && (
        <Image
          width={ICON_BY_BUTTON_SIZE[size]}
          height={ICON_BY_BUTTON_SIZE[size]}
          src={ICON_URL[iconName]}
          alt="버튼 아이콘 입니다."
        />
      )}
    </button>
  );
}
