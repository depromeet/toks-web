'use state';

import { getMonth, getYear } from 'date-fns';
import { useState } from 'react';

export const useChangeCalendar = () => {
  const todayDate = new Date();
  const [yearMonth, setYearMonth] = useState(() => [
    getYear(todayDate),
    getMonth(todayDate) + 1,
  ]);

  const [year, month] = yearMonth;

  return {
    year,
    month,
    setYearMonth,
  };
};
