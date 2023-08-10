'use client';

import React, { useRef } from 'react';

import { QuizCard } from '@/common';
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
      {quizList.map((quiz) => (
        <QuizCard key={quiz.id} quizType="default" sizeType="large" {...quiz} />
      ))}
      {hasNextPage && <div ref={observeBox} />}
    </div>
  );
};
