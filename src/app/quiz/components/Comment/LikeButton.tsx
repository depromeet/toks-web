'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { HTMLAttributes, useState } from 'react';

import { ICON_URL, Text } from '@/common';

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
        src={isLiked ? ICON_URL.THUMBS_UP_FILLED : ICON_URL.THUMBS_UP}
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
