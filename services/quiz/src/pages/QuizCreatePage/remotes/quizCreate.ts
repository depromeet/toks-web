import { http } from '@depromeet/http';

import { QuizCreateFormValue } from '../types';

export const postCreateQuiz = async (quizFormValue: QuizCreateFormValue) => {
  const formData = new FormData();

  formData.append('quiz', quizFormValue.quiz);

  return await http.post('/api/v1/quizzes', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
