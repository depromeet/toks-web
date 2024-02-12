'use client';

import clsx from 'clsx';

import { Text, bgColor } from '@/common';

import { ProgressBar } from './ProgressBar';
import { Thumbnail } from './Thumbnail';
import { QuizButtonProps } from './type';
import { useState } from 'react';
import { Modal } from '@/common/components/Modal';

export { Thumbnail };
export function QuizButton({
  isSubmitted,
  isSelected = false,
  OXType,
  imageUrl,
  percentage = 0,
  participationLabel,
  className,
  name,
  ...rest
}: QuizButtonProps) {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={clsx(className, 'flex flex-1 flex-col items-center')}>
      {(OXType || imageUrl) && (
        <>
          <Thumbnail
            className="mb-24px w-full"
            OXType={OXType}
            imageUrl={imageUrl}
            name={name}
            onClick={() => {
              console.log('hihi');
              setIsShow(true);
            }}
          />
          {!OXType && (
            <Modal isShow={isShow} onClose={() => setIsShow(false)}>
              <img
                src={imageUrl}
                alt={`${name}사진`}
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </Modal>
          )}
        </>
      )}
      <div
        className={clsx(
          bgColor['gray90'],
          'relative h-40px w-full rounded-8px'
        )}
      >
        {isSubmitted && (
          <ProgressBar percentage={percentage} isSelected={isSelected} />
        )}
        <button
          className="absolute z-10 flex h-full w-full items-center justify-center"
          disabled={isSubmitted}
          {...rest}
        >
          <Text typo="bodyBold" color="gray10">
            {name}
          </Text>
        </button>
      </div>
      {isSubmitted && participationLabel && (
        <Text
          className="mt-14px"
          typo="bodyBold"
          color={isSelected ? 'primaryDefault' : 'gray60'}
        >
          {participationLabel}
        </Text>
      )}
    </div>
  );
}
