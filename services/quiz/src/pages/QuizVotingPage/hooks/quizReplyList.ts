import { QUERY_KEYS } from 'constants/queryKeys';
import { useQueryClient } from 'react-query';

export type QuizReply =
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
  | undefined
  | null;

export const useSetClientQuizReply = () => {
  const queryClient = useQueryClient();
  return (state: QuizReply) => queryClient.setQueryData(QUERY_KEYS.GET_QUIZREPLY, state);
};
