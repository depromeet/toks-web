export const PATHS = {
  home: {
    myStudy: '/home/my-studies',
  },
  quiz: {
    studyDetail: ({ studyId }: { studyId: number | string }) => `quiz/study-detail/${studyId}`,
  },
} as const;
