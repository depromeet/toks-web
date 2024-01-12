'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';

import { useLikeCommentMutation } from '@/app/(BackHeader)/quiz/_hooks/useLikeCommentMutation';
import { useUnlikeCommentMutation } from '@/app/(BackHeader)/quiz/_hooks/useUnlikeCommentMutation';
import { useAuth } from '@/common';
import { Text } from '@/common/components/Text';
import { LOGIN_URL } from '@/common/constants';

interface LikeButtonProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'className'> {
  commentId: number;
  quizId: string;
  like: number;
  isLiked: boolean;
  className?: string;
}

function LikeButton({
  commentId,
  quizId,
  like,
  isLiked,
  className,
  ...rest
}: LikeButtonProps) {
  const { isLogin } = useAuth();
  const router = useRouter();
  const { likeComment } = useLikeCommentMutation(String(commentId), quizId);
  const { unlikeComment } = useUnlikeCommentMutation(String(commentId), quizId);
  return (
    <button
      className={clsx(className, 'flex items-center gap-x-4px')}
      {...rest}
      onClick={() => {
        if (isLogin) {
          return (isLiked ? unlikeComment : likeComment)();
        }
        router.replace(LOGIN_URL);
      }}
    >
      <Image
        src={isLiked ? '/img/icon/like_on.svg' : '/img/icon/like_off.svg'}
        alt="좋아요 버튼"
        width={18}
        height={18}
      />
      <Text typo="body" color={isLiked ? 'primaryDefault' : 'white'}>
        {like}
      </Text>
    </button>
  );
}

export default LikeButton;
