import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import type { QuizCardProps } from './types';
import { Badge } from '../Badge';
import { Text } from '../Text';

export const QuizCard = ({
  categoryTitle,
  quizDescription,
  images,
  quizType = 'default',
  handleCardClick,
}: QuizCardProps) => {
  const isOX = quizType === 'ox';

  const OxQuizThumbnail = () => {
    return (
      <div className="flex h-full flex-1">
        <div className="relative flex flex-1 items-center justify-center bg-blue-10">
          <Image
            width={73}
            height={73}
            src="https://asset.tokstudy.com/ic_O.svg"
            alt="OX 퀴즈 O"
            loading="lazy"
          />
        </div>
        <div className="relative flex flex-1 items-center justify-center bg-danger-default">
          <Image
            width={73}
            height={73}
            src="https://asset.tokstudy.com/ic_X.svg"
            alt="OX 퀴즈 X"
            loading="lazy"
          />
        </div>
      </div>
    );
  };
  return (
    <div
      role="button"
      onClick={handleCardClick}
      className={clsx(
        'flex h-fit w-full min-w-180px flex-col justify-between gap-20px overflow-hidden rounded-12px bg-gray-110'
      )}
    >
      <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-8px">
        <div className="flex h-[167px] w-full">
          {isOX && images?.length === 0 ? (
            <OxQuizThumbnail />
          ) : (
            images?.map((src, index) => (
              <div className="h-full flex-1" key={`${src}-${index}`}>
                <img
                  className="h-full w-full object-cover object-center"
                  src={src}
                  alt={src}
                  loading="lazy"
                />
              </div>
            ))
          )}
        </div>
        <div className="flex w-full flex-1 flex-col bg-gray-90 p-[16px]">
          <div className="flex items-center gap-[4px]">
            <Badge label={quizType === 'default' ? 'AB' : 'OX'} />
            <Text typo="captionBold" color="gray60">
              {categoryTitle}
            </Text>
          </div>
          <div className="inline-flex flex-1 -translate-y-0.5 items-center pt-12px">
            <Text className="line-clamp-2" typo="bodyBold" color="gray10">
              {quizDescription}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};
