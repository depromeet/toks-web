import { QuizResponse, QuizSubmitRequest } from '@/app/quiz/models/quiz';
import { http } from '@/common/utils/http';

export const getQuizDetailByQuizId = async (quizId: string) => {
  return await http.get<QuizResponse>(`api/v1/quizzes/${quizId}`);
};
export const fetchQuizDetailByQuizID = async (quizId: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}`,
    {
      method: 'GET',
      cache: 'no-cache',
    }
  );
  if (!result.ok) {
    throw new Error('데이터를 가져오는데 실패했습니다.');
  }
  return result.json();
};

export const postSubmitQuizByQuizId = async ({
  quizId,
  answer,
}: QuizSubmitRequest) => {
  return await http.post(`api/v1/quizzes/${quizId}`, { answer });
};
