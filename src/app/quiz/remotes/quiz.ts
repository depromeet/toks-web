// import { headers } from 'next/headers';

import {
  QuizDetailResponse,
  QuizRecommendResponse,
  QuizSubmitRequest,
} from '@/app/quiz/models/quiz';
import { http } from '@/common/utils/http';

// function getToken() {
//   // const headersInstance = headers();
//   const authorization =
//     'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrYW5naGcxMTE2QG5hdmVyLmNvbSIsInVpZCI6NCwiaWF0IjoxNjg4MjI1NzM3LCJpc3MiOiI0IiwiZXhwIjoxNzE5NzYxNzM3fQ.sQVuFvrSpVaeCaDBAh1nrWdy-xgdWp-aE-J0K0DVEJ8'; //headersInstance.get('X-TOKS-AUTH-TOKEN');
//   return authorization;
// }

// export const getQuizDetailByQuizId = async (quizId: string) => {
//   const authorization = getToken();
//   const result = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}`,
//     {
//       cache: 'no-store',
//       headers: {
//         'Content-Type': 'application/json',
//         ...(authorization
//           ? { 'X-TOKS-AUTH-TOKEN': authorization as string }
//           : {}),
//       },
//     }
//   );
//   const quizDetailInfo = await result.json();
//   const quizDetail: QuizDetailResponse = quizDetailInfo.data;
//   return quizDetail;
// };

export const getQuizDetailByQuizId = async (quizId: string) => {
  return await http.get<QuizDetailResponse>(`api/v1/quizzes/${quizId}`);
};

export const postSubmitQuizByQuizId = async ({
  quizId,
  answer,
}: QuizSubmitRequest) => {
  return await http.post(`api/v1/quizzes/${quizId}`, { answer });
};

// 위 아래 둘 다 http 객체 이용하는거로 바꿔야 함. 클라이언트 컴포넌트에서 쓸거라서...

// export const postSubmitQuizByQuizId = async (
//   quizSubmitRequest: QuizSubmitRequest
// ) => {
//   const authorization = getToken();
//   const result = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes/${quizId}`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         ...(authorization
//           ? { 'X-TOKS-AUTH-TOKEN': authorization as string }
//           : {}),
//       },
//       body: JSON.stringify(quizSubmitRequest),
//     }
//   );
//   return result;
// };

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
