'use client';

import { useRouter } from 'next/navigation';
import React, { useRef } from 'react';

import { QuizCard } from '@/common/components/QuizCard';
import { useIntersectionObserver } from '@/common/hooks';
import { useQuizListInfinityQuery } from '@/queries/useQuizListInfinityQuery';

import { QuizNotice } from './QuizNotice';
import { SkeletonCardList } from './SkeletonCard';
import { CARD_LIST_QUERY_DEFAULT } from '../constants';

export const CardList = () => {
  const router = useRouter();
  const observeBox = useRef<HTMLDivElement>(null);
  const {
    data = CARD_LIST_QUERY_DEFAULT,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = useQuizListInfinityQuery();

  useIntersectionObserver({
    target: observeBox,
    onIntersect: fetchNextPage,
    enabled: hasNextPage && !isFetchingNextPage,
  });

  const { pages: quizList } = data;

  // TODO: Suspense fallback
  if (isLoading) {
    return <SkeletonCardList />;
  }

  return (
    <div className="flex h-full flex-col gap-8px">
      {quizList?.length === 0 && (
        <div className="flex h-main items-center justify-center">
          <QuizNotice />
        </div>
      )}
      {quizList?.map(({ images, quizType, ...quiz }) => (
        <QuizCard
          key={quiz.id}
          quizType={quizType.startsWith('A_B_') ? 'default' : 'ox'}
          sizeType="large"
          images={images}
          handleCardClick={() => router.push(`/quiz/${quiz.id}`)}
          {...quiz}
        />
      ))}
      <div ref={observeBox} />
      {isFetchingNextPage && <SkeletonCardList />}
    </div>
  );
};
