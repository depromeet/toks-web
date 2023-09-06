'use client';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/quiz/constants/queryKeys';
import { getCommentsByQuizId } from '@/app/quiz/remotes/comment';

export const useGetCommentListQuery = (quizId: string) => {
  return useQuery(
    QUERY_KEYS.GET_COMMENT_LIST(quizId),
    async () => {
      try {
        return await getCommentsByQuizId(quizId);
      } catch {
        throw new Error('퀴즈 댓글을 가져오는데 실패했습니다.');
      }
    },
    {
      select: ({ content }) => content,
    }
  );
};
