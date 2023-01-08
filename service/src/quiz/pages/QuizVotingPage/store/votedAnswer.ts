import { EachQuizReplyByResponse } from 'quiz/common/models/quizReply';
import { atom } from 'recoil';

export const votedAnswer = atom<EachQuizReplyByResponse | null>({
  key: 'votedAnswer',
  default: null,
});
