'use client';

import { ICON_URL } from '@/common/resourceUrl';
import clsx from 'clsx';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

import { Text } from '../Text';

interface TextProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'> {
  like: number;
  isLiked: boolean;
  className?: string;
}

function LikeButton({ like, isLiked, className, ...rest }: TextProps) {
  return (
    <button
      className={clsx(className, 'flex', 'items-center', 'gap-x-1')}
      {...rest}
      onClick={() => console.log('좋아요 버튼 클릭됨~')}
    >
      <Image
        // TODO : 좋아요 버튼이 선택됐을 때의 디자인이 달라질 수 있어서 이렇게 해놓음
        src={isLiked ? ICON_URL.THUMBS_UP : ICON_URL.THUMBS_UP}
        alt="좋아요 버튼"
        width={18}
        height={18}
      />
      <Text typo="body" color="white">
        {like}
      </Text>
    </button>
  );
}

export default LikeButton;
