'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { HTMLAttributes } from 'react';

import { useLikeCommentMutation } from '@/app/quiz/hooks/useLikeCommentMutation';
import { useUnlikeCommentMutation } from '@/app/quiz/hooks/useUnlikeCommentMutation';
import { Text, useAuth } from '@/common';

import like_off from '../../../../../public/img/icon/like_off.svg';
import like_on from '../../../../../public/img/icon/like_on.svg';

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
        signIn('kakao');
      }}
    >
      <Image
        src={isLiked ? like_on : like_off}
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
