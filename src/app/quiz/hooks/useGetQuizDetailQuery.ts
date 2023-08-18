'use client';

import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/app/quiz/constants/queryKeys';
import { QuizResponse } from '@/app/quiz/models/quiz';
import { getQuizDetailByQuizId } from '@/app/quiz/remotes/quiz';

export const useGetQuizDetailQuery = (quizId: string) => {
  const { data: quizDetail, isError } = useQuery<QuizResponse>(
    QUERY_KEYS.GET_QUIZ_DETAIL(quizId),
    () => getQuizDetailByQuizId(quizId)
  );

  if (isError) {
    throw new Error('퀴즈 상세 데이터를 가져오는데 실패했습니다.');
  }

  if (quizDetail === undefined) {
    return null;
  }

  const {
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
  } = quizDetail;

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
};
