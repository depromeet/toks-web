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
    TO_DO: convertMilliSecondToTimeFormat(duration),
    IN_PROGRESS: calculateRemainingTimerValue(currentDate, limitDate),
  }
  return getTimerValue[quizItemStatus];
};

const convertMilliSecondToTimeFormat = (millisecond: number) => 
  new Date(millisecond).toISOString().slice(11,19)

const calculateRemainingTimerValue = (currentDate: Date, limitDate: Date) => {
  const remainingTime = limitDate.getTime() - currentDate.getTime();
  if (remainingTime < 0) {
    return '00:00:00';
  }

  return convertMilliSecondToTimeFormat(remainingTime);
};
