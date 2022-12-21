import { useTimer } from '@depromeet/utils';
import { useEffect } from 'react';

const padZero = (value: string | number = 0) => value.toString().padStart(2, '0');

export function Timer() {
  const { time, stop, hours, minutes, seconds } = useTimer({ time: 10 });

  useEffect(() => {
    // EX. 5초에 멈추기
    if (time === 5) {
      stop();
    }
  }, [time, stop]);

  return (
    <div>
      {/* EX) 00:10:09 */}
      {padZero(hours)}:{padZero(minutes)}:{padZero(seconds)}
    </div>
  );
}
