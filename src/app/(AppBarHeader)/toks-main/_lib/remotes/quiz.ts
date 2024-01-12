type Props = { page: number; size: number; categoryIds: string[] };

export const getQuizList = async ({ page, size, categoryIds }: Props) => {
  const queryParams: Record<string, string> = {};

  if (categoryIds.length > 0) {
    queryParams['categoryIds'] = categoryIds.join(',');
  }

  queryParams['page'] = String(page);
  queryParams['size'] = String(size);

  const searchParams = new URLSearchParams(queryParams).toString();
  const res = await fetch(`api/v1/quizzes?${searchParams}`, {
    next: {
      tags: ['quiz-list'],
    },
  });

  return res.json();
};
