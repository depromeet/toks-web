import { QuizStatus } from '@depromeet/toks-components';

export const getQuizItemStatus = (openDate: Date, limitDate: Date) => {
  const currentDate = new Date();

  if (limitDate.getTime() <= currentDate.getTime()) 
    return 'DONE';
  if (currentDate.getTime() < openDate.getTime()) 
    return 'TO_DO';
  
  return 'IN_PROGRESS';
};

export const getTimerByQuizStatus = (
  currentDate: Date,
  duration: number,
  limitDate: Date,
  quizItemStatus: QuizStatus
) => {
  const getTimerValue = {
    DONE: "00:00:00",
    TO_DO: convertMilliSecondToString(duration),
    IN_PROGRESS: calculateRemainingTimerValue(currentDate, limitDate),
  }
  return getTimerValue[quizItemStatus];
};

const convertTimeFormat = (num: number) => (num < 10 ? `0${num}` : num);

export const convertMilliSecondToString = (milliSecond: number) => {
  const day = Math.floor(milliSecond / (1000 * 60 * 60 * 24));
  milliSecond -= day * (1000 * 60 * 60 * 24);
  const hh = Math.floor(milliSecond / (1000 * 60 * 60));
  milliSecond -= hh * (1000 * 60 * 60);
  const mm = Math.floor(milliSecond / (1000 * 60));
  milliSecond -= mm * (1000 * 60);
  const ss = Math.floor(milliSecond / 1000);

  return `${convertTimeFormat(hh)}:${convertTimeFormat(mm)}:${convertTimeFormat(ss)}`;
};

// const convertMilliSecondToString = (second: number) => {
//   const day = Math.floor(second / (60 * 60 * 24));
//   second -= day * (60 * 60 * 24);
//   const hh = Math.floor(second / (60 * 60));
//   second -= hh * (60 * 60);
//   const mm = Math.floor(second / (60));
//   second -= mm * (60);
//   const ss = Math.floor(second);

//   return `${convertTimeFormat(hh)}:${convertTimeFormat(mm)}:${convertTimeFormat(ss)}`;
// };

const calculateRemainingTimerValue = (currentDate: Date, limitDate: Date) => {
  const remainingTime = limitDate.getTime() - currentDate.getTime();
  if (remainingTime < 0) {
    return '00:00:00';
  }

  return convertMilliSecondToString(remainingTime);
};
