import clsx from 'clsx';
import React from 'react';

import { Skeleton } from '@/common/components/Skeleton';

type Props = {
  quizType?: 'ox' | 'default';
};

export const SkeletonCardList = () => {
  return (
    <div className="flex h-full flex-col gap-8px">
      <SkeletonCard quizType="ox" />
      <SkeletonCard />
      <SkeletonCard quizType="ox" />
      <SkeletonCard />
      <SkeletonCard quizType="ox" />
      <SkeletonCard />
    </div>
  );
};

const SkeletonCard = ({ quizType = 'default' }: Props) => {
  return (
    <div
      className={clsx(
        'flex h-220px w-full min-w-180px gap-20px rounded-12px bg-gray-110 px-16px py-20px'
      )}
    >
      <div className="flex h-full flex-1 animate-pulse flex-col justify-between">
        <div className="flex flex-col">
          <div className="flex gap-8px">
            <Skeleton className="h-[20px] w-[40px]" />
            <Skeleton className="h-[20px] w-[40px]" />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8px rounded-8px">
          <Skeleton className="h-[20px] w-4/5" />
          <Skeleton className="h-[20px]" />
          <Skeleton className="h-[20px] w-3/5" />
        </div>
        <Skeleton className="h-[14px]" />
      </div>
      <div className="flex w-[120px] animate-pulse flex-col gap-8px">
        {quizType === 'ox' ? (
          <>
            <Skeleton className="h-1/2" />
            <Skeleton className="h-1/2" />
          </>
        ) : (
          <Skeleton className="h-full" />
        )}
      </div>
    </div>
  );
};
