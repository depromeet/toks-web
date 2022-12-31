import { useTimer } from '@depromeet/utils';
import { useEffect, useState } from 'react';

const padZero = (value: string | number = 0) => value.toString().padStart(2, '0');

type QuizTimerProps = {
  duration: number;
};

export function QuizTimer({ duration }: QuizTimerProps) {
  const { time, stop, hours, minutes, seconds } = useTimer({ time: duration });
  const [isQuizClosed, setIsQuizClosed] = useState(false);

  useEffect(() => {
    // EX. 5초에 멈추기
    if (time === 0) {
      setIsQuizClosed(true);
      stop();
    }
  }, [time, stop]);

  return isQuizClosed ? (
    <>똑스 종료</>
  ) : (
    <div>
      {/* EX) 00:10:09 */}
      {padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}
    </div>
  );
}
