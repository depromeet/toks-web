import { differenceInDays, format } from 'date-fns';

export const formatStartedAtToDecimalDay = (startedAt: string) => {
  const today = new Date();
  const startedAtDate = new Date(startedAt);

  return differenceInDays(startedAtDate, today) + 1;
};

export const formatStartedAtDay = (startedAt: string) => {
  const date = new Date(startedAt);
  return format(date, 'yyyy.MM.dd');
};
