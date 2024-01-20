import { GetQuizListRequest, GetQuizListResponse } from './types';

export const getQuizList = async ({
  page,
  size,
  categoryIds,
}: GetQuizListRequest) => {
  const queryParams: Record<string, string> = {};

  if (categoryIds.length > 0) {
    queryParams['categoryIds'] = categoryIds.join(',');
  }

  queryParams['page'] = String(page);
  queryParams['size'] = String(size);

  const searchParams = new URLSearchParams(queryParams).toString();

  // return await http.get<GetQuizListResponse>(`api/v1/quizzes?${searchParams}`);

  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/v1/quizzes?${searchParams}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
      next: {
        tags: [String(page), String(size)],
      },
    }
  );
  if (!result.ok) {
    throw new Error('데이터를 가져오는데 실패했습니다.');
  }

  const { data } = await result.json();
  return data as GetQuizListResponse;
};
