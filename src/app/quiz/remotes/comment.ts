import { CommentType } from '@/app/quiz/models/comment';
import { getCookieMap } from '@/common';

export const getCommentsByQuizId = async (quizId: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}/comments?page=0&size=100`,
    { next: { tags: ['quiz-comment'] } }
  );
  const commentInfo = await result.json();
  const comments: CommentType[] = commentInfo.data.content;
  return comments;
};

export const postCommentByQuizId = async (quizId: string, comment: string) => {
  const cookieMap = getCookieMap();
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}/comments`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-TOKS-AUTH-TOKEN': cookieMap.get('accessToken') ?? '',
      },
      body: JSON.stringify({
        comment,
      }),
    }
  );
  const commentInfo = await result.json();
  const data: CommentType = commentInfo.data.content;
  return data;
};
