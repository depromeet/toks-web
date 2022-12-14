type QuizStatus = 'default' | 'disabled' | 'activated';

const parseTimeStr = (timeStr: string) => [...timeStr.split(':').map(Number)];

export const getLimitDate = (openDate: Date, limitTime: string) => {
  const [hour, minute, second] = parseTimeStr(limitTime);
  const limitDate = new Date(openDate);
  limitDate.setHours(limitDate.getHours() + hour);
  limitDate.setMinutes(limitDate.getMinutes() + minute);
  limitDate.setSeconds(limitDate.getSeconds() + second);
  return limitDate;
};

export const isExistQuizToSolve = (limitDate: Date) => {
  const currentDate = new Date();
  return limitDate.getTime() <= currentDate.getTime();
};

export const getQuizItemType = (openDate: Date, limitDate: Date) => {
  const currentDate = new Date();

  if (limitDate.getTime() <= currentDate.getTime()) {
    return 'default';
  } else if (currentDate.getTime() < openDate.getTime()) {
    return 'disabled';
  } else {
    return 'activated';
  }
};

export const getTimerByQuizType = (quizItemType: QuizStatus, limitTime: number, limitDate: Date) => {
  if (quizItemType === 'default') {
    return '00:00:00';
  } else if (quizItemType === 'disabled') {
    return convertMilliSecondToString(limitTime * 1000);
  } else {
    return calculateRemainingTimerValue(limitDate);
  }
};

const convertTimeFormat = (num: number) => (num < 10 ? `0${num}` : num);

export const convertMilliSecondToString = (millisecond: number) => {
  const day = Math.floor(millisecond / (1000 * 60 * 60 * 24));
  millisecond -= day * (1000 * 60 * 60 * 24);
  const hour = Math.floor(millisecond / (1000 * 60 * 60));
  millisecond -= hour * (1000 * 60 * 60);
  const minute = Math.floor(millisecond / (1000 * 60));
  millisecond -= minute * (1000 * 60);
  const second = Math.floor(millisecond / 1000);

  return `${convertTimeFormat(hour)}:${convertTimeFormat(minute)}:${convertTimeFormat(second)}`;
};

const calculateRemainingTimerValue = (limitDate: Date) => {
  const remainingTime = limitDate.getTime() - new Date().getTime();
  if (remainingTime <= 0) {
    return '00:00:00';
  }

  return convertMilliSecondToString(remainingTime);
};
