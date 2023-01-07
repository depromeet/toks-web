---
to: services/<%= name %>/pages/_app.tsx
---
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle as ToksDesignSystemStyle, OverlayProvider } from '@depromeet/toks-components';

const normalizedStyles = css`
  ${emotionNormalize}
`;

const disallowUserSelectStyle = css`
  *:not(input):not(textarea) {
    user-select: none;
    -webkit-touch-callout: none;
  }
`;

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          },
        },
      })
  );

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <title>Toks</title>
      </Head>

      <Global styles={normalizedStyles} />
      <Global styles={disallowUserSelectStyle} />
      {/* Design System Style */}
      <ToksDesignSystemStyle />
      {/* Color Token 설정 */}
      <QueryClientProvider client={queryClient}>
        <OverlayProvider>{getLayout(<Component {...pageProps} />)}</OverlayProvider>{' '}
      </QueryClientProvider>
    </>
  );
}
