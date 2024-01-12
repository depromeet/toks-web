import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import React from 'react';

import { CardList } from './CardList';
import { getQuizList } from '../_lib/remotes/quiz';

const QuizListServerComponent = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: ({ pageParams }) =>
      getQuizList({
        page: pageParams,
        size: 10,
        categoryIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      }),
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CardList />
    </HydrationBoundary>
  );
};

export default QuizListServerComponent;
