import { useCallback, useEffect, useReducer } from 'react';

import reducer from './state/reducer';
import { Config, ReturnValue } from './types';

export const useTimer = ({
  initialStatus = 'STOPPED',
  initialTime = 0,
  onTimeOver,
  onTimeUpdate,
}: Partial<Config> = {}): ReturnValue => {
  const [state, dispatch] = useReducer(reducer, {
    status: initialStatus,
    time: initialTime,
  });

  const { status, time } = state;

  const pause = useCallback(() => {
    dispatch({ type: 'pause' });
  }, []);

  const start = useCallback(() => {
    dispatch({ type: 'start', payload: initialTime });
  }, [initialTime]);

  useEffect(() => {
    if (typeof onTimeUpdate === 'function') {
      onTimeUpdate(time);
    }
  }, [time, onTimeUpdate]);

  useEffect(() => {
    if (status !== 'STOPPED' && time === 0) {
      dispatch({ type: 'stop' });

      if (typeof onTimeOver === 'function') {
        onTimeOver();
      }
    }
  }, [onTimeOver, time, status]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (status === 'RUNNING') {
      intervalId = setInterval(() => {
        dispatch({
          type: 'set',
          payload: time - 1,
        });
      }, 1000);
    } else if (intervalId) {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [status, time]);

  return { pause, start, status, time };
};
