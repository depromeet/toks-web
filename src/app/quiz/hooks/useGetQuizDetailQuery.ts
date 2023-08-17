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

  if (isError || quizDetail === undefined) {
    throw new Error('퀴즈 상세 데이터를 가져오는데에 실패헀습니다.');
  }

  const {
    quiz: {
      title: quizTitle,
      tags,
      question: {
        imageUrl: oxImageUrl,
        buttons: { '1': button1, '2': button2 },
      },
      quizType,
      description: oxDescription,
      answer: oxAnswer,
    },
    category: { name: categoryName },
    quizReply,
    quizReplyCount: { totalCount, replyCount },
    isSubmitted,
  } = quizDetail;

  return {
    quizTitle,
    tags,
    oxImageUrl,
    button1,
    button2,
    quizType,
    oxDescription,
    oxAnswer,
    categoryName,
    quizReply,
    totalCount,
    replyCount,
    isSubmitted,
  };
};
