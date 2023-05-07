import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { spoqaHanSansNeo } from '@/styles/fonts/spoqaHanSansNeo/spoqaHanSansNeo';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            suspense: true,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <main className={spoqaHanSansNeo.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}

export default MyApp;
