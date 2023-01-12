export const QUIZ_LIMIT_TIME = [
  { label: '1시간', value: 60 * 60 },
  { label: '1시간 30분', value: 90 * 60 },
  { label: '2시간', value: 120 * 60 },
  { label: '2시간 30분', value: 180 * 60 },
  { label: '3시간', value: 240 * 60 },
];

export const DEFAULT_QUIZ_FORM_VALUE = {
  question: '',
  quizType: 'MARK_DOWN',
  description: '',
  answer: '',
  startedAt: '',
  durationOfSecond: 0,
  studyId: 0,
  round: 0,
  imageUrls: [],
  imageFiles: [],
  timepicker: undefined,
};
