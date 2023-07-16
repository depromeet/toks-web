import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { AvatarProps } from './types';

export const Avatar = ({
  src = '',
  size = 'M',
  name,
  ...rest
}: AvatarProps) => {
  return (
    <div
      className={clsx(
        'relative inline-block overflow-hidden rounded-full ring-2 ring-white',
        {
          'h-30px w-30px': size === 'M',
          'h-24px w-24px': size === 'S',
        }
      )}
    >
      <Image alt={`${name} 아바타`} src={src} layout="fill" {...rest} />
    </div>
  );
};
