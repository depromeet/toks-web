'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/quiz/constants/queryKeys';
import { postCommentLikeByCommentId } from '@/app/quiz/remotes/comment';

import { CommentListResponse } from '../models/comment';

export const useLikeCommentMutation = (commentId: string, quizId: string) => {
  const queryClient = useQueryClient();

  const { mutate: likeComment, isLoading } = useMutation(
    async () => {
      try {
        await postCommentLikeByCommentId({ commentId });
      } catch {
        throw new Error('댓글 좋아요 요청에 실패하였습니다.');
      }
    },

    {
      onMutate: async () => {
        await queryClient.cancelQueries(QUERY_KEYS.GET_COMMENT_LIST(quizId));

        const previousLiked: CommentListResponse | undefined =
          queryClient.getQueryData(QUERY_KEYS.GET_COMMENT_LIST(quizId));

        queryClient.setQueryData(QUERY_KEYS.GET_COMMENT_LIST(quizId), () => {
          return {
            ...previousLiked,
            content: previousLiked?.content.map((el) => {
              if (el.id === Number(commentId)) {
                return {
                  ...el,
                  isLiked: true,
                  likeCount: el.likeCount + 1,
                };
              } else {
                return el;
              }
            }),
          };
        });

        return { previousLiked };
      },
      onError: (err, previousLiked) => {
        queryClient.setQueryData(
          QUERY_KEYS.GET_COMMENT_LIST(quizId),
          previousLiked
        );
        console.log(err);
      },
      onSettled: () => {
        queryClient.invalidateQueries(QUERY_KEYS.GET_COMMENT_LIST(quizId));
      },
    }
  );

  return {
    likeComment,
    isLoading,
  };
};
