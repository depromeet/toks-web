'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ICON_URL, bgColor, cn } from '@/common';
import { Modal } from '@/common/components/Modal';

import { QuizButtonProps } from './type';

interface ThumbnailProps
  extends Pick<QuizButtonProps, 'OXType' | 'imageUrl' | 'className'> {
  name?: string;
}

export function Thumbnail({
  OXType,
  imageUrl,
  name = '퀴즈',
  className,
  ...rest
}: ThumbnailProps) {
  const [isShow, setIsShow] = useState(false);

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
        <>
          <img
            onClick={() => setIsShow(true)}
            src={imageUrl}
            alt={`${name}사진`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
          <Modal isShow={isShow} onClose={() => setIsShow(false)}>
            <img
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="rounded-8px"
              src={imageUrl}
              alt={`${name}사진`}
              style={{
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
          </Modal>
        </>
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
