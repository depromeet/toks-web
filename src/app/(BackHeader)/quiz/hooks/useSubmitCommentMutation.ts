'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/(BackHeader)/quiz/constants/queryKeys';
import { postCommentByQuizId } from '@/app/(BackHeader)/quiz/remotes/comment';

export const useSubmitCommentMutation = (quizId: string) => {
  const queryClient = useQueryClient();

  const { mutate: submitComment, isPending } = useMutation({
    mutationFn: async (comment: string) => {
      try {
        await postCommentByQuizId({ quizId, comment });
      } catch {
        throw new Error('퀴즈 제출 요청에 실패하였습니다.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.GET_COMMENT_LIST(quizId),
      });
    },
  });

  return {
    submitComment,
    isLoading: isPending,
  };
};
