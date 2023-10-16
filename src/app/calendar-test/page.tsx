'use client';
import { textColor } from '@/common';
import { format } from 'date-fns';
import Calendar from 'react-calendar';
import './Calendar.css';

export default function () {
  return (
    <div>
      <Calendar
        locale="ko-KO"
        className={textColor['white']}
        calendarType="US"
        formatDay={(_, date) => format(date, 'd')}
      />
    </div>
  );
}
