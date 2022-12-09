import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { OverlayProvider } from '@toss/use-overlay';
import { GlobalStyle as ToksDesignSystemStyle, ToksHeader } from '@depromeet/toks-components';

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
            networkMode: 'always',
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
        <OverlayProvider>
          {getLayout(
            <>
              {/* //TODO: ToksHeader Layout으로 뺴기 */}
              <ToksHeader imgUrl="https://asset.tokstudy.com/img_penguin.png" userName="강현구" />
              <Component {...pageProps} />
            </>
          )}
        </OverlayProvider>
      </QueryClientProvider>
    </>
  );
}
