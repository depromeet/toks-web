'use client';

import { throttle } from 'lodash';
import { useCallback, useEffect, useMemo } from 'react';

export function useThrottle<Callback extends (...args: any[]) => any>(
  callback: Callback,
  wait: number,
  options: Parameters<typeof throttle>[2] = {}
) {
  const preservedCallback = useCallback(callback, [callback]);

  const throttledCallback = useMemo(() => {
    return throttle(preservedCallback, wait, options);
  }, [preservedCallback, wait, options]);

  useEffect(
    () => () => {
      throttledCallback.cancel();
    },
    [throttledCallback]
  );

  return throttledCallback;
}
