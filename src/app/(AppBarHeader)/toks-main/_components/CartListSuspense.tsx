import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';

import { getQuizList } from '@/queries/useQuizListInfinityQuery/apis';

import { CardList } from './CardList';

export default async function CartListSuspense(): Promise<JSX.Element> {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: [
      'quizList',
      {
        categoryIds: [],
        page: 0,
        size: 15,
      },
    ],
    queryFn: () =>
      getQuizList({
        categoryIds: [],
        page: 0,
        size: 15,
      }),
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CardList />
    </HydrationBoundary>
  );
}
