import { useRef, useState } from 'react';

import { getTooltipPosition } from './getTooltipPosition';
import { TooltipContent } from './TooltipContent';
import { TooltipPortal } from './TooltipPortal';

export interface PositionType {
  left?: number;
  top?: number;
}

export function Tooltip({
  children,
  message,
  isVisibleTooltip = true,
}: {
  children: React.ReactNode;
  message: string;
  isVisibleTooltip?: boolean;
}) {
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
      {show && isVisibleTooltip && (
        <TooltipPortal>
          <TooltipContent
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
}
