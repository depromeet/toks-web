import { useQueryClient } from 'react-query';

import { QUERY_KEYS } from 'constants/queryKeys';

export type QuizReply =
  | {
      quizReplyHistoryId: number;
      answer: string;
      likeCount: number;
      creator: {
        userId: number;
        nickname: string;
        profileImageUrl: string;
      };
    }
  | undefined
  | null;

export const useSetClientQuizReply = () => {
  const queryClient = useQueryClient();
  return (state: QuizReply) => queryClient.setQueryData(QUERY_KEYS.GET_QUIZREPLY, state);
};
