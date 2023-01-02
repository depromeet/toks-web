export const PATHS = {
  home: {
    myStudy: '/home/my-studies',
  },
  quiz: {
    studyDetail: ({ studyId }: { studyId: number | string }) => `/quiz/study-detail/${studyId}`,
    solve: ({ quizId }: { quizId: number | string }) => `/quiz/solve/${quizId}`,
    vote: ({ quizId }: { quizId: number | string }) => `/quiz/vote/${quizId}`,
  },
  onboarding: {
    createStudy: '/onboarding/create-study',
    createComplete: ({ studyId }: { studyId: number | string }) => `/onboarding/create-complete/${studyId}`,
  },
  login: {
    main: '/login',
    nickname: '/myName',
  },
} as const;

/**
 * @feat 외부 서비스로 이동할 때, 사용합니다 like router.push
 * https://nextjs.org/docs/api-reference/next/router#routerpush
 * */
export const pushTo = (path: string) => {
  window.location.href = `${window.location.origin}${path}`;
  return;
};

/**
 * @feat 외부 서비스로 이동할 때, 사용합니다 like router.replace
 * https://nextjs.org/docs/api-reference/next/router#routerpush
 * */
export const replaceTo = (path: string) => {
  window.location.replace(`${window.location.origin}${path}`);
  return;
};
