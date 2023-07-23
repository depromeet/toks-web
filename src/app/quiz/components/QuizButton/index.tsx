'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { ICON_URL, Text, bgColor } from '@/common';

import { ProgressBar } from './ProgressBar';
import { QuizButtonProps } from './type';

export function QuizButton({
  isSubmitted,
  isSelected = false,
  thumbnailType,
  imageUrl,
  percentage = 0,
  participationLabel,
  name,
}: QuizButtonProps) {
  return (
    <button className="flex flex-1 flex-col items-center">
      {imageUrl && (
        <div className="relative mb-24px aspect-square w-full">
          <Image
            src={imageUrl}
            alt={`${name}사진`}
            className="rounded-8px"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            layout="fill"
            blurDataURL={ICON_URL.BLUR_BACKGROUND}
          />
        </div>
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
        <div className="absolute z-10 flex h-full w-full items-center justify-center">
          <Text typo="bodyBold" color="gray10">
            {name}
          </Text>
        </div>
      </div>
      {participationLabel && (
        <Text
          className="mt-14px"
          typo="bodyBold"
          color={isSelected ? 'primaryDefault' : 'gray60'}
        >
          {participationLabel}
        </Text>
      )}
    </button>
  );
}
