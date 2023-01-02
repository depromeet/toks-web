import { QuizReplyByIdResponse } from 'common/models/quizReply';
import { QUERY_KEYS } from 'constants/queryKeys';
import { useQueryClient, useQuery } from 'react-query';

type QuizReply =
  | {
      quizReplyHistoryId: number;
      answer: string;
      likeNumber: number;
      creator: {
        userId: number;
        nickname: string;
        profileImageUrl: string;
      };
    }
  | undefined;

export const useSetClientQuizReply = () => {
  const queryClient = useQueryClient();
  return (state: QuizReply) => queryClient.setQueryData(QUERY_KEYS.GET_QUIZREPLY, state);
};
