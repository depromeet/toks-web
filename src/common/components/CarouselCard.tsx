import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { ICON_URL } from '@/common/constants';

import { Badge } from './Badge';
import { QuizCardProps } from './QuizCard/types';
import { Text } from './Text';

export const CarouselCard = ({
  categoryTitle,
  quizDescription,
  images,
  quizType = 'default',
  handleCardClick,
}: Omit<QuizCardProps, 'sizeType' | 'commentCount' | 'likeCount'>) => {
  const isOX = quizType === 'ox';
  const OxQuizThumbnail = () => {
    return (
      <div className="flex h-full w-full rounded-8px">
        <div
          className="flex flex-1 items-center justify-center"
          style={{
            backgroundColor: '#3E97FF',
          }}
        >
          <Image src={ICON_URL.O} alt="OX 퀴즈 O" width={26} height={26} />
        </div>
        <div
          className="flex flex-1 items-center justify-center"
          style={{
            backgroundColor: '#FF5B65',
          }}
        >
          <Image src={ICON_URL.X} alt="OX 퀴즈 X" width={22} height={22} />
        </div>
      </div>
    );
  };

  return (
    <div
      role="button"
      onClick={handleCardClick}
      className={clsx(
        'flex min-w-246px max-w-320px justify-between gap-16px rounded-12px bg-gray-90 p-20px'
      )}
    >
      <div className="flex w-full flex-1 flex-col">
        <div className="flex items-center gap-[4px]">
          <Badge label={quizType === 'default' ? 'AB' : 'OX'} />
          <Text typo="captionBold" color="gray60">
            {categoryTitle}
          </Text>
        </div>
        <div className="inline-flex flex-1 -translate-y-0.5 items-center pt-8px">
          <Text className="line-clamp-3" typo="subheadingBold" color="gray10">
            {quizDescription}
          </Text>
        </div>
      </div>
      <div className="flex h-100px w-100px flex-col justify-between overflow-hidden rounded-8px">
        {isOX && images?.length === 0 ? (
          <OxQuizThumbnail />
        ) : (
          images?.map((src, index) => (
            <div
              className={images.length > 1 ? 'h-1/2' : 'h-full'}
              key={`${src}-${index}`}
            >
              <img
                className="h-full w-full"
                src={src}
                alt={src}
                loading="lazy"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
