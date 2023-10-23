'use client';

import { ToksCalendar } from '@/common';

export default function () {
  return (
    <div>
      <ToksCalendar
        calendarDates={[
          {
            date: '2023-09-06',
            count: 4,
          },
          {
            date: '2023-09-16',
            count: 1,
          },
          {
            date: '2023-09-30',
            count: 3,
          },
        ]}
      />
    </div>
  );
}
