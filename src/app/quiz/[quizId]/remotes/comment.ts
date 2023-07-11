import { CommentType } from '../models/comment';

export const getCommentsByQuizId = async (quizId: string) => {
  const comments: CommentType[] = await fetch(
    `https://api.tokstudy.com/api/v1/quizzes/${quizId}/comments?page=0&size=100`,
    { cache: 'no-store' }
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.data.content);
  return comments;
};
