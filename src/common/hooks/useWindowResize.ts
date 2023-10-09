import { useEffect, useRef } from 'react';

export const useWindowResize = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleVisualViewPortResize = () => {
      const currentVisualViewport = Number(window.visualViewport?.height);
      if (divRef) {
        divRef.current!.style.height = `${currentVisualViewport - 20}px`;
        window.scrollTo(0, 40);
      }
    };
    if (window.visualViewport) {
      window.visualViewport.onresize = handleVisualViewPortResize;
    }
  }, []);
  return divRef;
};
