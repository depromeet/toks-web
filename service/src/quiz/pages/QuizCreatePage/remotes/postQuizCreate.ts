import { http } from '@depromeet/http';

import { QuizCreateForm } from '../types';

export const postQuizCreate = ({
  question,
  quizType,
  description,
  answer,
  startedAt,
  studyId,
  round,
  imageUrls,
  durationOfSecond,
}: QuizCreateForm) => {
  return http.post('/api/v1/quizzes', {
    question,
    quizType,
    description,
    answer,
    startedAt,
    studyId,
    round,
    imageUrls,
    durationOfSecond,
  });
};
