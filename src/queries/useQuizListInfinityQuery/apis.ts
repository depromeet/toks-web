import { http } from '@/common/utils/http';

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

  const { data } = await http.get<GetQuizListResponse>(
    `api/v1/quizzes?${searchParams}`
  );

  return data;
};
