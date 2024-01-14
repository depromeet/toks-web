'use client';

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, useState } from 'react';
import { RecoilRoot } from 'recoil';

import { GlobalPortal } from '../components/GlobalPortal';

export default function RootProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
        queryCache: new QueryCache({
          onError: () => {
            // TODO: error handling
          },
        }),
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalPortal.Provider>{children}</GlobalPortal.Provider>
      </RecoilRoot>
      <ReactQueryDevtools
        initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'}
      />
    </QueryClientProvider>
  );
}
