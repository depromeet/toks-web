import { RefObject } from 'react';

// TODO: right 버전 추가
export const getTooltipPosition = (ref: RefObject<HTMLDivElement>, gap = 5) => {
  const { left: tooltipLeft, top: tooltipTop } =
    ref.current?.getBoundingClientRect() || {
      left: 0,
      top: 0,
    };

  const tooltipContentHeight = ref.current?.clientHeight ?? 0;
  const tooltipContentWidth = ref.current?.clientWidth ?? 0;

  const left = tooltipLeft + tooltipContentWidth / 2;

  const tooltipArrow = tooltipTop + tooltipContentHeight + 10;
  const top = tooltipArrow + gap;

  return {
    left,
    top,
  };
};
