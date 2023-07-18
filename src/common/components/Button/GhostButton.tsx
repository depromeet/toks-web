'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { ICON_URL, Text } from '@/common';

import {
  GAP_BY_BUTTON_SIZE,
  HEIGHT_BY_BUTTON_SIZE,
  ICON_BY_BUTTON_SIZE,
  PADDING_BY_BUTTON_SIZE,
  TEXT_COLOR_BY_GHOST_BUTTON_TYPE,
  TYPO_BY_GHOST_BUTTON_SIZE,
} from './constants';
import { ButtonProps } from './type';

export function GhostButton({
  iconName,
  className,
  buttonType = 'primary',
  size = 'M',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        HEIGHT_BY_BUTTON_SIZE[size],
        PADDING_BY_BUTTON_SIZE[size],
        iconName && GAP_BY_BUTTON_SIZE[size],
        'flex items-center justify-center rounded-8px'
      )}
      {...rest}
    >
      <Text
        typo={TYPO_BY_GHOST_BUTTON_SIZE[size]}
        color={TEXT_COLOR_BY_GHOST_BUTTON_TYPE[buttonType]}
      >
        {children}
      </Text>
      {iconName && (
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
