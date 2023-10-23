import { textColor, bgColor, Text } from '@/common';
import clsx from 'clsx';
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

  const getHighlightClassName = (date: Date) => {
    const count = countByDate.get(format(date, 'yyyy-MM-dd'));
    if (count === undefined) return;
    if (count <= 1) return 'highlight1';
    if (count <= 3) return 'highlight2';
    return 'highlight3';
  };

  return (
    <div
      className={clsx('w-334px w-fit rounded-12px p-24px', bgColor['gray110'])}
    >
      <Calendar
        locale="ko-KO"
        className={textColor['white']}
        calendarType="US"
        prevLabel=""
        nextLabel=""
        formatDay={(_, date) => format(date, 'd')}
        formatMonthYear={(_, date) => format(date, 'yyyy.MM월')}
        tileClassName={({ date }) => {
          return countByDate.get(format(date, 'yyyy-MM-dd'))
            ? textColor['white']
            : '';
        }}
        tileContent={({ date }) => {
          return (
            <div
              className={clsx(
                getHighlightClassName(date),
                'absolute z-0 h-32px w-32px'
              )}
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            ></div>
          );
        }}
        {...rest}
      />
      <div className="flex justify-center gap-12px">
        <Legend highlightClassName="highlight1" content="출석 완료" />
        <Legend highlightClassName="highlight2" content="3문제 이하" />
        <Legend highlightClassName="highlight3" content="4문제 이상" />
      </div>
    </div>
  );
}

// 범례라는 뜻이 있다고 하네요.
const Legend = ({
  highlightClassName,
  content,
}: {
  highlightClassName: 'highlight1' | 'highlight2' | 'highlight3';
  content: string;
}) => {
  return (
    <div className="flex items-center gap-4px">
      <div className={clsx(highlightClassName, 'h-12px w-12px')}></div>
      <Text typo="caption" color="gray60">
        {content}
      </Text>
    </div>
  );
};
