import { intervalToDuration } from 'date-fns';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Timer {
  time: number;
  enabled?: boolean;
}

const TIMER_DURATION = 1000;

/**
 * @param time -> second
 *
 */
export function useTimer({ time: totalTime, enabled = true }: Timer) {
  const [time, setTime] = useState<number>(totalTime);

  const timer = useRef<number | null>(null);

  // 멈춤
  const stop = useCallback(() => {
    timer.current != null && window.clearInterval(timer.current);
  }, []);

  // 시작
  const start = useCallback(() => {
    timer.current = window.setInterval(() => {
      setTime(time => {
        const nextTime = time - 1;

        if (nextTime <= 0) {
          stop();
          return 0;
        }

        return nextTime;
      });
    }, TIMER_DURATION);
  }, [stop]);

  // 재시작
  const restart = useCallback(() => {
    setTime(totalTime);
    start();
  }, [setTime, start, totalTime]);

  useEffect(() => {
    if (enabled && timer.current == null) {
      start();
    } else if (!enabled) {
      stop();
    }
  }, [enabled, start, stop]);

  const duration = intervalToDuration({ start: 0, end: time * 1000 });

  return { time, ...duration, stop, start, restart };
}
