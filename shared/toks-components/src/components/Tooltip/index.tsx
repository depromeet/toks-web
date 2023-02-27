import { useRef, useState } from 'react';

import { getTooltipPosition } from './getTooltipPosition';
import { TooltipContent } from './TooltipContent';
import { TooltipPortal } from './TooltipPortal';

export type DirectionType = 'bottom' | 'right';
export interface PositionType {
  left?: number;
  top?: number;
}

export const isBottom = (position: DirectionType) => position === 'bottom';

/*
  TODO: right 방향 구현 필요
*/

export const Tooltip = ({
  children,
  message,
  direction = 'bottom',
}: {
  children: React.ReactNode;
  message: string;
  direction?: DirectionType;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const position = useRef<PositionType | null>(null);

  const handleToggleTooltip = (isShow: boolean) => {
    position.current = getTooltipPosition(ref);
    setShow(isShow);
  };

  return (
    <span
      onFocus={() => handleToggleTooltip(true)}
      onMouseLeave={() => handleToggleTooltip(false)}
      onMouseOver={() => handleToggleTooltip(true)}
      ref={ref}
      style={{
        display: 'inline-block',
        minWidth: 0,
        position: 'relative',
      }}
    >
      {children}
      {show && (
        <TooltipPortal>
          <TooltipContent
            direction={direction}
            message={message}
            position={{
              left: position.current?.left,
              top: position.current?.top,
            }}
          />
        </TooltipPortal>
      )}
    </span>
  );
};
