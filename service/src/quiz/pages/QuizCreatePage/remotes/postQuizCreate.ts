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
  imageFiles,
  durationOfSecond,
}: QuizCreateForm) => {
  const quizForm = new FormData();

  quizForm.append('question', question);
  quizForm.append('quizType', quizType);
  if (description) {
    quizForm.append('description', description);
  }
  quizForm.append('answer', answer);
  quizForm.append('durationOfSecond', String(durationOfSecond));
  quizForm.append('startedAt', startedAt);
  quizForm.append('studyId', String(studyId));
  quizForm.append('round', String(round));

  if (imageFiles) {
    imageFiles.forEach(imageFile => {
      quizForm.append('imageFiles', imageFile);
    });
  }

  return http.post('/api/v1/quizzes', quizForm, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
