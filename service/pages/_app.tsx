import { Global, css, ThemeProvider } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle as ToksDesignSystemStyle, OverlayProvider } from '@depromeet/toks-components';
import { Layout } from '@depromeet/layout';
import { theme } from '@depromeet/theme';
import { RecoilRoot } from 'recoil';

import 'yet-another-react-lightbox/styles.css';
import { ErrorBoundary } from '@toss/error-boundary';
import Error from 'components/Error';

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
      <ToksDesignSystemStyle />
      {/* Color Token 설정 */}
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <OverlayProvider>
            <RecoilRoot>
              {getLayout(
                <ErrorBoundary renderFallback={() => <Error />}>
                  <Component {...pageProps} />
                </ErrorBoundary>
              )}
            </RecoilRoot>
          </OverlayProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
