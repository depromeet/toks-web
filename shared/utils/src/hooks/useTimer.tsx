import { useEffect, useRef, useState } from 'react';

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

  const start = () => {
    timer.current = window.setInterval(() => {
      setTime(time => {
        const nextTime = time - 1;

        if (nextTime < 0) {
          stop();
          return 0;
        }

        return nextTime;
      });
    }, TIMER_DURATION);
  };

  const stop = () => {
    timer.current != null && clearInterval(timer.current);
  };

  useEffect(() => {
    if (enabled && timer.current == null) {
      start();
    } else if (!enabled) {
      stop();
    }
  }, [enabled]);

  return { time };
}
