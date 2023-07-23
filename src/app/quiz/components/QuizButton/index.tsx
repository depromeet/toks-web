'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { ICON_URL, Text, bgColor } from '@/common';

interface QuizButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitted: boolean;
  thumbnailType?: 'O' | 'X';
  imageUrl?: string;
  percentage?: number;
  participationLabel?: string;
  name: string;
}

const usePercentageAnimation = (percentage: number) => {
  const [percentageAnimation, setPercentageAnimation] = useState(0);
  useEffect(() => {
    setPercentageAnimation(percentage);
  }, [percentageAnimation, percentage]);
  return percentageAnimation;
};

export function QuizButton({
  isSubmitted,
  thumbnailType,
  imageUrl,
  percentage = 0,
  participationLabel,
  name,
}: QuizButtonProps) {
  const percentageAnimation = usePercentageAnimation(percentage);
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
          <div
            style={{
              width: `${percentageAnimation}%`,
              transition: 'width 0.5s ease',
            }}
            className={clsx(
              bgColor['primaryDefault'],
              'absolute z-0 h-full rounded-8px'
            )}
          ></div>
        )}
        <div className="absolute z-10 flex h-full w-full items-center justify-center">
          <Text typo="bodyBold" color="gray10">
            {name}
          </Text>
        </div>
      </div>
      {participationLabel && (
        <Text className="mt-14px" typo="bodyBold" color="primaryDefault">
          {participationLabel}
        </Text>
      )}
    </button>
  );
}
