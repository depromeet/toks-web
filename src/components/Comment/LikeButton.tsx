'use client';

import { ICON_URL } from '@/common/resourceUrl';
import clsx from 'clsx';
import Image from 'next/image';
import { HTMLAttributes, useState } from 'react';

import { Text } from '../Text';

interface LikeButtonProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'> {
  commentid: number;
  like: number;
  isLiked: boolean;
  className?: string;
}

function LikeButton({ like, isLiked, className, ...rest }: LikeButtonProps) {
  const [likeState, setLikeState] = useState(like);
  return (
    <button
      className={clsx(className, 'flex', 'items-center', 'gap-x-1')}
      {...rest}
      onClick={() => setLikeState((prev) => prev + 1)}
    >
      <Image
        // TODO : 좋아요 버튼이 선택됐을 때의 디자인이 달라질 수 있어서 이렇게 해놓음
        src={isLiked ? ICON_URL.THUMBS_UP : ICON_URL.THUMBS_UP}
        alt="좋아요 버튼"
        width={18}
        height={18}
      />
      <Text typo="body" color="white">
        {likeState}
      </Text>
    </button>
  );
}

export default LikeButton;
