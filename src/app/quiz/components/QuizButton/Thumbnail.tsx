'use client';

import Image from 'next/image';
import { HTMLAttributes } from 'react';

import { ICON_URL, bgColor, cn } from '@/common';

import { QuizButtonProps } from './type';

interface ThumbnailProps
  extends Pick<QuizButtonProps, 'OXType' | 'imageUrl' | 'className'>,
    HTMLAttributes<HTMLDivElement> {
  name?: string;
}

export function Thumbnail({
  OXType,
  imageUrl,
  name = '퀴즈',
  className,
  ...rest
}: ThumbnailProps) {
  return (
    <div
      {...rest}
      className={cn(
        'relative flex aspect-square w-140px items-center justify-center overflow-hidden rounded-8px',
        OXType &&
          (OXType === 'O' ? bgColor['blue10'] : bgColor['dangerDefault']),
        className
      )}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`${name}사진`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      )}
      {OXType && (
        <Image
          src={ICON_URL[OXType]}
          alt={`${OXType}사진`}
          className="rounded-8px"
          width={70}
          height={70}
        />
      )}
    </div>
  );
}
