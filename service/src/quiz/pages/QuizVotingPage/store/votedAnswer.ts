import { atom } from 'recoil';

import { EachQuizReplyByResponse } from 'quiz/common/models/quizReply';

export const votedAnswer = atom<EachQuizReplyByResponse | null>({
  key: 'votedAnswer',
  default: null,
});
