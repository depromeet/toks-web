import { useContext } from 'react';

import { QuizContext } from '@/app/(BackHeader)/quiz/_components';

export const useCommentListRef = () => {
  const context = useContext(QuizContext);
  if (context === null) {
    throw new Error('QuizProvider안에서 사용되어야 합니다!');
  }
  return context.commentListRef;
};
