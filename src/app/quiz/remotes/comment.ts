import { CommentType } from '@/app/quiz/models/comment';

export const getCommentsByQuizId = async (quizId: string) => {
  const comments: CommentType[] = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}/comments?page=0&size=100`,
    { cache: 'no-store' }
  )
    .then((result) => result.json())
    .then((commentInfo) => commentInfo.data.content);
  return comments;
};

const getCookieMap = () => {
  const cookieArray: string[][] = document.cookie
    .split('; ')
    .map((entry) => entry.split('='));

  const iterableCookieArray: Array<readonly [string, string]> = cookieArray.map(
    ([key, value]) => [key, value]
  );

  return new Map(iterableCookieArray);
};

export const postCommentByQuizId = async (quizId: string, comment: string) => {
  const cookieMap = getCookieMap();
  const data: CommentType = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}/comments`,
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-TOKS-AUTH-TOKEN': cookieMap.get('accessToken') ?? '',
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
