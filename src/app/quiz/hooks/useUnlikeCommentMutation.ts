'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/quiz/constants/queryKeys';
import { postCommentUnlikeByCommentId } from '@/app/quiz/remotes/comment';

import { CommentListResponse } from '../models/comment';

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
                  isLiked: false,
                  likeCount: el.likeCount - 1,
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
    unlikeComment,
    isLoading,
  };
};
