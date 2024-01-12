'use client';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/(BackHeader)/quiz/constants/queryKeys';
import { getQuizDetailByQuizId } from '@/app/(BackHeader)/quiz/remotes/quiz';

export const useGetQuizDetailQuery = (quizId: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.GET_QUIZ_DETAIL(quizId),
    queryFn: async () => {
      try {
        return await getQuizDetailByQuizId(quizId);
      } catch {
        throw new Error('퀴즈 상세 데이터를 가져오는데 실패했습니다.');
      }
    },
    select: ({
      quiz: {
        title: quizTitle,
        tags,
        question: { imageUrl: oxImageUrl, buttons },
        quizType,
        description: oxDescription,
        answer: oxAnswer,
      },
      category: { name: categoryName },
      quizReply,
      quizReplyCount: { totalCount, replyCount },
      isSubmitted,
    }) => {
      const buttonLeft = buttons.A ?? buttons.O;
      const buttonRight = buttons.B ?? buttons.X;

      const answerCount = {
        left: replyCount?.A?.count ?? replyCount?.O?.count ?? 0,
        right: replyCount?.B?.count ?? replyCount?.X?.count ?? 0,
      };

      const answerPercentage = {
        left: Math.floor((answerCount.left / totalCount) * 100),
        right: Math.floor((answerCount.right / totalCount) * 100),
      };

      const answerParticipationLabel = {
        left: `${answerPercentage.left}% (${answerCount.left}명)`,
        right: `${answerPercentage.right}% (${answerCount.right}명)`,
      };

      return {
        quizTitle,
        tags,
        oxImageUrl,
        buttonLeft,
        buttonRight,
        quizType,
        oxDescription,
        oxAnswer,
        categoryName,
        quizReply,
        answerPercentage,
        answerParticipationLabel,
        isSubmitted,
      };
    },
  });
};
