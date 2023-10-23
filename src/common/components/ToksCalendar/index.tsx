import { textColor } from '@/common';
import { format } from 'date-fns';
import Calendar, { CalendarProps } from 'react-calendar';
import './Calendar.css';

type CalendarDatesType = {
  date: string;
  count: number;
};

interface ToksCalendarProps extends CalendarProps {
  calendarDates: CalendarDatesType[];
}

export function ToksCalendar({
  calendarDates,
  className,
  ...rest
}: ToksCalendarProps) {
  const countByDate = new Map(
    calendarDates.map(({ date, count }) => [date, count])
  );

  return (
    <div className="flex justify-items-center">
      <Calendar
        locale="ko-KO"
        className={textColor['white']}
        calendarType="US"
        formatDay={(_, date) => format(date, 'd')}
        tileClassName={({ date }) => {
          const count = countByDate.get(format(date, 'yyyy-MM-dd'));
          if (count === undefined) return;
          if (count <= 1) return 'highlight1';
          if (count <= 3) return 'highlight2';
          return 'highlight3';
        }}
        {...rest}
      />
    </div>
  );
}
