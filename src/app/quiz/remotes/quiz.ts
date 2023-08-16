// import { headers } from 'next/headers';

import { QuizDetailResponse, QuizRecommendResponse } from '../models/quiz';

function getToken() {
  // const headersInstance = headers();
  const authorization =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYW5naGcxMTE2QG5hdmVyLmNvbSIsInVpZCI6NCwiaWF0IjoxNjg4MjI1NzM3LCJpc3MiOiI0IiwiZXhwIjoxNzE5NzYxNzM3fQ.sQVuFvrSpVaeCaDBAh1nrWdy-xgdWp-aE-J0K0DVEJ8'; //headersInstance.get('X-TOKS-AUTH-TOKEN');
  return authorization;
}

export const getQuizDetailByQuizId = async (quizId: string) => {
  const authorization = getToken();
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}`,
    {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        ...(authorization
          ? { 'X-TOKS-AUTH-TOKEN': authorization as string }
          : {}),
      },
    }
  );
  const quizDetailInfo = await result.json();
  const quizDetail: QuizDetailResponse = quizDetailInfo.data;
  return quizDetail;
};

export const getRecommendationByQuizId = async (quizId: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/rec/quizzes?quizId=${quizId}`,
    {
      cache: 'force-cache',
    }
  );
  const quizRecommendInfo = await result.json();
  const quizRecommendModels: QuizRecommendResponse[] =
    quizRecommendInfo.data.quizRecommendModels;
  return quizRecommendModels;
};
