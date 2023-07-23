'use client';

import clsx from 'clsx';
import Image from 'next/image';

import { ICON_URL, Text, bgColor } from '@/common';

interface QuizButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitted: boolean;
  thumbnailType?: 'O' | 'X';
  imageUrl?: string;
  percentage?: number;
  name: string;
}

export function QuizButton({
  isSubmitted,
  thumbnailType,
  imageUrl,
  percentage,
  name,
}: QuizButtonProps) {
  return (
    <button className="flex flex-1 flex-col gap-24px">
      {imageUrl && (
        <div className="relative aspect-square w-full">
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
          'w-full rounded-8px px-20px py-10px'
        )}
      >
        <Text typo="bodyBold" color="gray10">
          {name}
        </Text>
      </div>
    </button>
  );
}
