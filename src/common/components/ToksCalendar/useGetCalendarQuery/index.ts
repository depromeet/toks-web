import { useQuery } from '@tanstack/react-query';
import { getCalendar } from './api';
import { CalendarResponse } from './type';

export const useGetCalendarQuery = (year: number, month: number) => {
  return useQuery<CalendarResponse>(['calendar', month], () =>
    getCalendar(year, month)
  );
};
