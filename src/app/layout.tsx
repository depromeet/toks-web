import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Head from 'next/head';

import { bgColor } from '@/common/foundation';
import QueryProvider from '@/common/providers/QueryProvider';
import * as gtag from '@/common/utils';

export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: '똑스 : 지식을 키우는 첫 시작!',
    description: '똑스와 함께, 퀴즈로 똑똑해지고 더 나은 습관 만들기',
    images: 'https://toks-web-assets.s3.amazonaws.com/toks-og.png',
    type: 'website',
    siteName: 'Toks',
    url: 'https://tokstudy.com/',
  },
  icons: {
    icon: 'https://toks-web-assets.s3.amazonaws.com/legacy/toktok.ico',
  },
  title: 'Toks',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
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
      </Head>
      <body className={clsx(pretendard.className, bgColor['mainLayout'])}>
        <QueryProvider>
          <StyledLayout>{children}</StyledLayout>
        </QueryProvider>
      </body>
    </html>
  );
}

function StyledLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ minHeight: '100dvh' }}
      className={clsx('mx-auto max-w-main bg-gray-120 px-20px')}
    >
      {children}
    </div>
  );
}

const pretendard = localFont({
  src: [
    { path: './fonts/Pretendard-Regular.woff2', weight: '400' },
    { path: './fonts/Pretendard-SemiBold.woff2', weight: '600' },
    { path: './fonts/Pretendard-Bold.woff2', weight: '700' },
  ],
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
