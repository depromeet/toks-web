import { differenceInDays } from 'date-fns';

export const formatStartedAtToDecimalDay = (startedAt: string) => {
  const today = new Date();
  const startedAtDate = new Date(startedAt);

  return differenceInDays(startedAtDate, today) + 1;
};
