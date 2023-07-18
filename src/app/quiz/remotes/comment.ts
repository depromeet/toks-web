import { CommentType } from '@/app/quiz/models/comment';

export const getCommentsByQuizId = async (quizId: string) => {
  const comments: CommentType[] = await fetch(
    `https://api.tokstudy.com/api/v1/quizzes/${quizId}/comments?page=0&size=100`,
    { cache: 'no-store' }
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.data.content);
  return comments;
};

export const postCommentByQuizId = async (quizId: string, comment: string) => {
  const DUHYEON_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbmd1czA5MjdAbmF0ZS5jb20iLCJ1aWQiOjIsImlhdCI6MTY4ODIyNTcxNiwiaXNzIjoiMiIsImV4cCI6MTcxOTc2MTcxNn0.skBi7GdIbGeUAPv8D2ZKhTOov4kb0woQAtwnLFK2Hec';
  const data: CommentType = await fetch(
    `https://api.tokstudy.com/api/v1/quizzes/${quizId}/comments`,
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-TOKS-AUTH-TOKEN': DUHYEON_TOKEN,
      },
      body: JSON.stringify({
        comment,
      }),
    }
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.data);
  return data;
};
