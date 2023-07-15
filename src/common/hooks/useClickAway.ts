import { useEffect, useRef } from 'react';

interface UseClickAwayProperties {
  callback: VoidFunction;
  enabled: boolean;
}
export const useClickAway = ({ callback, enabled }: UseClickAwayProperties) => {
  const ref = useRef<HTMLDivElement>(null);
  const savedHandler = useRef<UseClickAwayProperties['callback']>(callback);
  // NOTE: Handler가 교체 될 경우에, event가 제거되고 다시 정의가 되는 걸 방지

  useEffect(() => {
    savedHandler.current = callback; // Event는 유지하며 Handler 교체
  }, [callback]);

  useEffect(() => {
    const element = ref.current; // 이벤트 발생 요소 참조
    if (!element) {
      return;
    }

    const handleEvent = (event: MouseEvent | TouchEvent) => {
      const isEnabled = enabled && !element.contains(event.target as Node); // 이벤트 발생 요소가 포함되어 있는지 확인
      if (isEnabled) {
        savedHandler.current();
      }
    };

    document.addEventListener('mousedown', handleEvent); // PC Mouse Event 발생 시, 이벤트 핸들러 실행
    document.addEventListener('touchstart', handleEvent); // Mobile Touch Event 발생 시, 이벤트 핸들러 실행
    return () => {
      // 종료 시, 이벤트 제거
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
    };
  }, [ref, enabled]);

  return ref;
};
