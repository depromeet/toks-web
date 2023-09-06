'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/quiz/constants/queryKeys';
import { postCommentByQuizId } from '@/app/quiz/remotes/comment';

export const useSubmitCommentMutation = (quizId: string) => {
  const queryClient = useQueryClient();

  const { mutate: submitComment, isLoading } = useMutation(
    async (comment: string) => {
      try {
        await postCommentByQuizId({ quizId, comment });
      } catch {
        throw new Error('퀴즈 제출 요청에 실패하였습니다.');
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(QUERY_KEYS.GET_COMMENT_LIST(quizId));
      },
    }
  );

  return {
    submitComment,
    isLoading,
  };
};
