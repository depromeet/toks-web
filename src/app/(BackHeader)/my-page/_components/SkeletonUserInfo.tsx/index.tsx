import Image from 'next/image';

import { ICON_URL } from '@/common';
import { Skeleton } from '@/common/components/Skeleton';

export const SkeletonUserInfo = () => {
  return (
    <div className="flex w-full animate-pulse flex-col items-center pt-20px text-center">
      <div className="mx-auto mb-24px h-96px w-96px overflow-hidden rounded-full">
        <Image
          src={ICON_URL.EMOJI_BASE_GRAY}
          alt="프로필 이미지"
          width={96}
          height={96}
        />
      </div>
      <div className="flex w-full flex-col items-center">
        <Skeleton className="mb-[8px] h-[24px] w-[120px]" />
        <Skeleton className="m-[4px] h-[16px] w-[200px]" />
      </div>
    </div>
  );
};
