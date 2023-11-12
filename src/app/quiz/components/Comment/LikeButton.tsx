'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { HTMLAttributes } from 'react';

import { useLikeCommentMutation } from '@/app/quiz/hooks/useLikeCommentMutation';
import { useUnlikeCommentMutation } from '@/app/quiz/hooks/useUnlikeCommentMutation';
import { Text } from '@/common';

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
  // Mutation을 통해서 좋아요, 좋아요 취소를 하게 되면 퀴즈 데이터 전체가 업데이트 되게 했는데
  // 렌더링 효율이 떨어지는 것 같다면 데이터 업데이트가 아니라 useState로 숫자를 업데이트 하고 아이콘을 변경하는 방식으로 수정해야 함.
  const { likeComment } = useLikeCommentMutation(String(commentId), quizId);
  const { unlikeComment } = useUnlikeCommentMutation(String(commentId), quizId);
  return (
    <button
      className={clsx(className, 'flex items-center gap-x-4px')}
      {...rest}
      onClick={() => (isLiked ? unlikeComment : likeComment)()}
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
