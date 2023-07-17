import clsx from 'clsx';
import Image from 'next/image';

import { ICON_URL, Text } from '@/common';

import {
  BACKGROUND_COLOR_BY_BUTTON_TYPE,
  GAP_BY_BUTTON_SIZE,
  HEIGHT_BY_BUTTON_SIZE,
  ICON_BY_BUTTON_SIZE,
  PADDING_BY_BUTTON_SIZE,
  TEXT_COLOR_BY_BUTTON_TYPE,
  TYPO_BY_BUTTON_SIZE,
} from './constants';
import { ButtonProps } from './type';

export function Button({
  iconName,
  className,
  buttonType = 'primary',
  width,
  size = 'M',
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(
        className,
        BACKGROUND_COLOR_BY_BUTTON_TYPE[disabled ? 'disabled' : 'default'][
          buttonType
        ],
        `active: ${BACKGROUND_COLOR_BY_BUTTON_TYPE['pressed'][buttonType]}`,
        HEIGHT_BY_BUTTON_SIZE[size],
        PADDING_BY_BUTTON_SIZE[size],
        iconName && GAP_BY_BUTTON_SIZE[size],
        width && `w-${width}px`,
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
      <Text
        typo={TYPO_BY_BUTTON_SIZE[size]}
        color={TEXT_COLOR_BY_BUTTON_TYPE[buttonType]}
      >
        {children}
      </Text>
    </button>
  );
}

// function GhostButton() {}

// function ToggleButton() {}
