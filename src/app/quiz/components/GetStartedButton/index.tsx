'use client';

import clsx from 'clsx';
import Image from 'next/image';
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
  return (
    <button
      className={clsx(
        className,
        bgColor['primaryDefault'],
        'w-full',
        'rounded-2xl',
        'px-4',
        'py-5'
      )}
      onClick={() => console.log('로그인 페이지로 이동')}
    >
      <div className={clsx('flex', 'items-center')}>
        <Image
          src={isCommentEmpty ? ICON_URL.EMOJI_NINJA : ICON_URL.EMOJI_DROOLING}
          alt="똑스 아이콘"
          width={48}
          height={48}
        />
        <div
          className={clsx(
            'flex',
            'flex-col',
            'ml-2',
            'flex-1',
            'text-left',
            'gap-0.5'
          )}
        >
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
