import { useEffect, useState } from 'react';

import { QuizStatus } from '../types/quiz';
import { getTimerByQuizStatus } from '../utils';

export const useTimer = (
  initialTimer: string,
  durationOfMilliSecond: number,
  limitDate: Date,
  quizItemStatus: QuizStatus = 'IN_PROGRESS'
) => {
  const [timer, setTimer] = useState(initialTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(getTimerByQuizStatus(new Date(), durationOfMilliSecond, limitDate, quizItemStatus));
    }, 1000);

    return () => clearInterval(interval);
  });

  return timer;
};
