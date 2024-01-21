import clsx from 'clsx';

import { Skeleton } from '@/common/components/Skeleton';

export const SkeletonQuizDetail = () => {
  return (
    <div
      className={clsx(
        'mt-8px flex w-full min-w-180px rounded-12px bg-gray-110 px-16px py-20px'
      )}
    >
      <div className="flex h-full flex-1 animate-pulse flex-col">
        <div className="flex flex-col">
          <div className="flex gap-8px">
            <Skeleton className="h-[20px] w-[40px]" />
            <Skeleton className="h-[20px] w-[40px]" />
          </div>
        </div>
        <div className="mt-12px flex flex-col justify-between gap-8px rounded-8px">
          <Skeleton className="h-[20px] w-3/5" />
          <Skeleton className="h-[20px] w-2/5" />
        </div>
        <div className="mt-48px flex gap-16px">
          <SkeletonQuizButton />
          <SkeletonQuizButton />
        </div>
      </div>
    </div>
  );
};

const SkeletonQuizButton = () => {
  // 버튼 마다 사진이 있는 타입만 구현
  return (
    <div className="flex flex-1 flex-col items-center">
      <div
        className={
          'relative mb-24px flex aspect-square w-full items-center justify-center overflow-hidden'
        }
      >
        <Skeleton className="h-full w-full rounded-[16px]" />
      </div>
      <Skeleton className={'relative h-[40px] w-full'} />
    </div>
  );
};
