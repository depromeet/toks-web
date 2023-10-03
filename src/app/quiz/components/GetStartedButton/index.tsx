'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';

import { Text } from '@/common/components';
import { ICON_URL } from '@/common/constants';
import { bgColor } from '@/common/foundation';

interface GetStartedButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'className'> {
  className?: string;
  isCommentEmpty: boolean;
}

export function GetStartedButton({
  className,
  isCommentEmpty,
}: GetStartedButtonProps) {
  const router = useRouter();
  bgColor;
  return (
    <button
      className={clsx(
        className,
        bgColor['primaryDefault'],
        'w-full rounded-16px px-16px py-20px'
      )}
      onClick={() => {
        router.replace('https://api.tokstudy.com/oauth2/authorize/kakao');
      }}
    >
      <div className="flex items-center">
        <Image
          src={isCommentEmpty ? ICON_URL.EMOJI_NINJA : ICON_URL.EMOJI_DROOLING}
          alt="똑스 아이콘"
          width={48}
          height={48}
        />
        <div className="ml-8px flex flex-1 flex-col gap-2px text-left">
          <Text typo="subheadingBold" color="white">
            {isCommentEmpty
              ? '제일 먼저 의견을 남겨볼까요?'
              : '같이 의견을 남겨보세요!'}
          </Text>
          <Text typo="body" color="white">
            카카오 로그인 후 댓글 달기
          </Text>
        </div>
        <Image
          src={ICON_URL.CHEVRON_RIGHT}
          alt="오른쪽 화살표 아이콘"
          width={24}
          height={24}
        />
      </div>
    </button>
  );
}
