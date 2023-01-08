export const PATHS = {
  home: {
    myStudy: '/home/my-studies',
  },
  quiz: {
    studyDetail: ({ studyId }: { studyId: number | string }) => `/quiz/study-detail/${studyId}`,
    solve: ({ quizId }: { quizId: number | string }) => `/quiz/solve/${quizId}`,
    vote: ({ quizId }: { quizId: number | string }) => `/quiz/vote/${quizId}`,
    check: ({ quizId }: { quizId: number | string }) => `/quiz/check/${quizId}`,
    create: ({ studyId }: { studyId: number | string }) => `/quiz/${studyId}/create`,
  },
  onboarding: {
    createStudy: '/onboarding/create-study',
    createComplete: ({ studyId }: { studyId: number | string }) => `/onboarding/create-complete/${studyId}`,
  },
  login: {
    main: '/login',
    nickname: '/login/myName',
  },
} as const;
