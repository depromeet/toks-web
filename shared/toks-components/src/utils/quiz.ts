import { differenceInSeconds } from 'date-fns';

import { QuizStatus } from '@depromeet/toks-components';

export const getQuizItemStatus = (openDate: Date, limitDate: Date) => {
  const currentDate = new Date();

  if (limitDate.getTime() <= currentDate.getTime()) {
    return 'DONE';
  }
  if (currentDate.getTime() < openDate.getTime()) {
    return 'TO_DO';
  }

  return 'IN_PROGRESS';
};

export const calculateRemainingSecond = (currentDate: Date, endDate: Date) => {
  return differenceInSeconds(endDate, currentDate);
};

export const getInitialTimerSecond = (
  currentDate: Date,
  durationOfSecond: number,
  limitDate: Date,
  quizItemStatus: QuizStatus
) => {
  const getTimerValue = {
    DONE: 0,
    TO_DO: durationOfSecond,
    IN_PROGRESS: calculateRemainingSecond(currentDate, limitDate),
  };
  return getTimerValue[quizItemStatus];
};

const padZero = (value = 0) => value.toString().padStart(2, '0');

export const convertSecondToString = (second: number) => {
  const day = Math.floor(second / (60 * 60 * 24));
  second -= day * (60 * 60 * 24);
  const hh = Math.floor(second / (60 * 60));
  second -= hh * (60 * 60);
  const mm = Math.floor(second / 60);
  second -= mm * 60;
  const ss = Math.floor(second);

  return `${padZero(hh)}:${padZero(mm)}:${padZero(ss)}`;
};
