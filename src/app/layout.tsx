import './globals.css';
import clsx from 'clsx';
import localFont from 'next/font/local';

import { bgColor } from '@/common/foundation';
import QueryProvider from '@/common/providers/QueryProvider';
import * as gtag from '@/common/utils';

export const metadata = {
  title: '똑스',
  description: 'toks에서 퀴즈를 풀어보세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
        />
        <link
          rel="icon"
          href="https://toks-web-assets.s3.amazonaws.com/legacy/toktok.ico"
          sizes="any"
        />
        <title>Toks</title>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        {/* GA설정 */}
        <script
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
        <script
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
      </head>
      <body className={clsx(pretendard.className, bgColor['gray120'])}>
        <QueryProvider>
          <StyledLayout>{children}</StyledLayout>
        </QueryProvider>
      </body>
    </html>
  );
}

function StyledLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100dvh' }} className={clsx('px-20px')}>
      {children}
    </div>
  );
}

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
