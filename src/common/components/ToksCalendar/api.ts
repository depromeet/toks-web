import { http } from '@/common/utils/http';
import { CalendarResponse } from './type';

export const getCalendar = async (year: number, month: number) => {
  return await http.get<CalendarResponse>(
    `/api/v1/fab/calendar?year=${year}&month=${month}`
  );
};
