import { theme } from '@depromeet/theme';
import { Global, css } from '@emotion/react';

export function GlobalStyle() {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
      <link rel="stylesheet" href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css" />
      <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css" />
      <link rel="stylesheet" href="https://uicdn.toast.com/editor/latest/toastui-editor.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css" />
      <link
        rel="stylesheet"
        href="https://uicdn.toast.com/editor-plugin-code-syntax-highlight/latest/toastui-editor-plugin-code-syntax-highlight.min.css"
      />
      <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css" />
      <Global styles={globalCss} />
      <script async src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"></script>
      <script async src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/components/prism-clojure.min.js"></script>
      <script async src="https://uicdn.toast.com/editor/latest/toastui-editor-all.min.js"></script>
      <script
        async
        src="https://uicdn.toast.com/editor-plugin-code-syntax-highlight/latest/toastui-editor-plugin-code-syntax-highlight-all.min.js"
      ></script>
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

  //스크롤바 커스텀
  ::-webkit-scrollbar {
    width: 4px; /* 스크롤바의 너비 */
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    /* height: 30%; 스크롤바의 길이 */
    background: ${theme.colors.gray070}; /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
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

  .blind {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
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

  /* calendar custom styling */
  .p-datepicker .p-datepicker-header {
    background-color: ${theme.colors.gray100} !important;
    border-bottom: none !important;
  }

  /* head */
  div.p-datepicker-calendar-container > table > thead {
    //styleName: body-02;
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.6px;
    text-align: center;
  }

  .p-datepicker .p-datepicker-header .p-datepicker-title button {
    color: ${theme.colors.white} !important;

    //styleName: Subhead;
    font-family: Spoqa Han Sans Neo;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.6px;
  }

  /* cell */
  .p-datepicker table td > span {
    //styleName: body-02;
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.6000000238418579px;
    text-align: center;
  }

  /* today cell */
  .p-datepicker table td.p-datepicker-today > span {
    background-color: ${theme.colors.primary} !important;
    color: ${theme.colors.white} !important;
  }

  /* 요일 days cell */
  .p-datepicker table th {
    :first-of-type,
    :last-of-type {
      color: ${theme.colors.danger} !important;
    }
    padding-bottom: 8px !important;
  }

  /* 토/일 cell */
  .p-datepicker table td {
    :first-of-type,
    :last-of-type {
      color: ${theme.colors.primary} !important;
    }
  }

  // ImageViewer background
  .yarl__container {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }

  // lightbox 왼쪽 버튼
  .yarl__navigation_prev {
    padding: 0 220px 0 114px !important;
  }
  // lightbox 오른쪽 버튼
  .yarl__navigation_next {
    padding: 0 114px 0 220px !important;
    height: 50px;
  }
  // lightbox image max width height
  .yarl__slide_image {
    max-width: 800px !important;
    max-height: 800px !important;
  }
  // lightbox 상단 x 버튼
  .yarl__toolbar .yarl__button {
    padding-right: 114px !important;
    color: ${theme.colors.gray080} !important;
  }
`;
