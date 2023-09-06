'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/quiz/constants/queryKeys';
import { postCommentUnlikeByCommentId } from '@/app/quiz/remotes/comment';

export const useUnlikeCommentMutation = (commentId: string, quizId: string) => {
  const queryClient = useQueryClient();

  const { mutate: unlikeComment, isLoading } = useMutation(
    async () => {
      try {
        await postCommentUnlikeByCommentId({ commentId });
      } catch {
        throw new Error('댓글 좋아요 요청에 실패하였습니다.');
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.GET_COMMENT_LIST(quizId));
      },
    }
  );

  return {
    unlikeComment,
    isLoading,
  };
};
