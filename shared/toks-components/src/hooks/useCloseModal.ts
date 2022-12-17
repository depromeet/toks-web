import { useEffect, useRef } from 'react';

export const useCloaseModal = (awayEvent: () => void, dep?: []) => {
  const ref = useRef<HTMLDivElement>(null);
  const callback = (e: MouseEvent) => {
    const element = ref.current; // wrapper
    if (!element) {
      return;
    }
    if (e.target === element) {
      awayEvent();
    }
  };

  useEffect(
    () => {
      document.body.addEventListener('click', callback);
      return () => document.body.removeEventListener('click', callback);
    },
    dep ? [...dep] : []
  );
  return ref;
};
