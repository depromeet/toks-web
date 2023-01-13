import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class ToksHomepageDocument extends Document {
  public render() {
    return (
      <Html lang="ko">
        <Head>
          <meta property="og:site_name" content="tokstudy" />
          <meta property="og:url" content="https://tokstudy.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://toks-web-assets.s3.amazonaws.com/toks-og.png" />
          <meta property="og:title" content="똑스에서 퀴즈를 이용한 동기부여로 성취경험을 만들어보세요!" />
          <meta property="og:description" content="개발자를 위한 스터디 - 똑스" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
