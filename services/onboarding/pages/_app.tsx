import { Global, css, ThemeProvider } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { OverlayProvider } from '@toss/use-overlay';
import { GlobalStyle as ToksDesignSystemStyle } from '@depromeet/toks-components';
import { theme } from '@depromeet/theme';
import { Layout } from '@depromeet/layout';

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
  const getLayout = Component.getLayout ?? (page => page);
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
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <OverlayProvider>
            {getLayout(
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </OverlayProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
