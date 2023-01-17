import { Global, css, ThemeProvider } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode, useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalStyle as ToksDesignSystemStyle, OverlayProvider } from '@depromeet/toks-components';
import { Layout } from '@depromeet/layout';
import { theme } from '@depromeet/theme';
import { RecoilRoot } from 'recoil';

import 'yet-another-react-lightbox/styles.css';
import { ErrorBoundary } from '@toss/error-boundary';
import Error from 'components/Error';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import Script from 'next/script';

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
  // GA 설정 시작
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  // GA 설정 끝

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
        />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <link rel="icon" href="https://toks-web-assets.s3.amazonaws.com/toktok.ico" />

        <title>Toks</title>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        {/* GA설정 */}
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        {/* hotjar 설정 */}
        <Script
          dangerouslySetInnerHTML={{
            __html: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HJID},hjsv:${process.env.NEXT_PUBLIC_HJSV}};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`,
          }}
        />
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
