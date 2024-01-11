import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { ICON_URL, IMAGE_URL } from '@/common';

import { AvatarProps } from './types';

export const Avatar = ({
  src = ICON_URL.AVATAR_DEFAULT,
  size = 'M',
  name,
  ...rest
}: AvatarProps) => {
  return (
    <div
      className={clsx('relative inline-block overflow-hidden rounded-full', {
        'h-30px w-30px': size === 'M',
        'h-24px w-24px': size === 'S',
      })}
    >
      <Image
        alt={`${name} 아바타`}
        src={src === IMAGE_URL.BASE_KAKAO ? ICON_URL.AVATAR_DEFAULT : src}
        {...rest}
      />
    </div>
  );
};
