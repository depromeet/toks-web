'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { ICON_URL, Text, bgColor } from '@/common';

import {
  GAP_BY_BUTTON_SIZE,
  HEIGHT_BY_BUTTON_SIZE,
  ICON_BY_BUTTON_SIZE,
  PADDING_BY_BUTTON_SIZE,
  PRESSED_BACKGROUND_BY_COLOR,
} from './constants';
import { ButtonProps } from './type';

export { GhostButton } from './GhostButton';
export function Button({
  iconName,
  className,
  textColor = 'gray10',
  backgroundColor = 'transparent',
  size = 'M',
  typo = 'body',
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        HEIGHT_BY_BUTTON_SIZE[size],
        PADDING_BY_BUTTON_SIZE[size],
        GAP_BY_BUTTON_SIZE[size],
        bgColor[backgroundColor],
        disabled ? 'opacity-40' : PRESSED_BACKGROUND_BY_COLOR[backgroundColor],
        // BACKGROUND_COLOR_BY_BUTTON_TYPE[disabled ? 'disabled' : 'default'][
        //   buttonType
        // ],
        // !disabled && BACKGROUND_COLOR_BY_BUTTON_TYPE['pressed'][buttonType],
        'flex items-center justify-center rounded-8px'
      )}
      disabled={disabled}
      {...rest}
    >
      {iconName && (
        <Image
          width={ICON_BY_BUTTON_SIZE[size]}
          height={ICON_BY_BUTTON_SIZE[size]}
          src={ICON_URL[iconName]}
          alt="버튼 아이콘 입니다."
        />
      )}
      <Text typo={typo} color={textColor}>
        {children}
      </Text>
    </button>
  );
}
