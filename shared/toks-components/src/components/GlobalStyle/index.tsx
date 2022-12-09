import { theme } from '@depromeet/theme';
import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
      <link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
      <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css" />
      <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css" />
      <Global styles={globalCss} />
    </>
  );
}

/*
TODO:
1. @depromeet/theme로 옮기기
2. color token css 변수로 정의되면 css파일로 옮겨서 관리해도 좋을듯
3. font token 정의하기
*/
const globalCss = css`
  html {
    font-size: 10px;
  }

  body {
    height: 100vh;

    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-size: 1rem;
    box-sizing: border-box;
    word-break: keep-all;
    overflow-wrap: break-word;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${theme.colors.gray120};
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  input,
  select,
  textarea,
  button {
    font-family: inherit;
  }

  body.no-scroll {
    overflow: hidden;
  }

  a,
  a:focus,
  a:hover {
    text-decoration: none;
  }

  /* dropdown custom styling */
  .p-dropdown-panel {
    margin-top: 4px;
    border-radius: 8px;
    background-color: ${theme.colors.gray100} !important;
  }
  .p-dropdown-items {
    background-color: ${theme.colors.gray100} !important;

    padding: 0 !important;
    border-radius: 8px;
  }

  .p-dropdown-item {
    font-family: 'Spoqa Han Sans Neo' !important ;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${theme.colors.white} !important;
    padding: 12px 16px !important;
    &:hover {
      background: ${theme.colors.gray090} !important;
    }
  }
  .p-highlight {
    background-color: ${theme.colors.gray080} !important;
  }
`;
