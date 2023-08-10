'use client';

import React, { useRef } from 'react';

import { QuizCard, Text } from '@/common';
import { useIntersectionObserver } from '@/common/hooks';
import { useQuizListInfinityQuery } from '@/queries/useQuizListInfinityQuery';

import { CARD_LIST_QUERY_DEFAULT } from '../constants';

export const CardList = () => {
  const observeBox = useRef<HTMLDivElement>(null);
  const {
    data = CARD_LIST_QUERY_DEFAULT,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useQuizListInfinityQuery();

  useIntersectionObserver({
    target: observeBox,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
  });

  const { pages: quizList } = data;

  return (
    <div className="flex flex-col gap-8px">
      {quizList?.length === 0 && (
        <div className="flex h-40px flex-col items-center justify-center">
          <Text typo="bodyBold" color="gray80">
            퀴즈가 없습니다.
          </Text>
        </div>
      )}
      {quizList?.map(({ images, ...quiz }) => (
        <QuizCard
          key={quiz.id}
          quizType={images.length === 0 ? 'ox' : 'default'}
          sizeType="large"
          images={images}
          {...quiz}
        />
      ))}
      {hasNextPage && <div ref={observeBox} />}
    </div>
  );
};
