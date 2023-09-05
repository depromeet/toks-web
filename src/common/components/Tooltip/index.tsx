'use client';
import { useEffect, useRef, useState } from 'react';

import { getTooltipPosition } from './getTooltipPosition';
import { TooltipContent } from './TooltipContent';
import { GlobalPortal } from '../GlobalPortal';

export interface PositionType {
  left?: number;
  top?: number;
}

export type TooltipProps = {
  children: React.ReactNode;
  message: string;
  delay?: number;
  isFirstRender?: boolean;
  isVisibleTooltip?: boolean;
};

export function Tooltip({
  children,
  message,
  delay = 3000,
  isFirstRender = false,
  isVisibleTooltip = true,
}: TooltipProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [isRefMounted, setIsRefMounted] = useState(false);

  const position = useRef<PositionType | null>(null);

  const handleToggleTooltip = (isShow: boolean) => {
    position.current = getTooltipPosition(ref);
    setShow(isShow);
  };

  useEffect(() => {
    if (isFirstRender) {
      setIsRefMounted(isFirstRender);
      handleToggleTooltip(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isRefMounted, isFirstRender, delay]);

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
        <GlobalPortal.Consumer>
          <TooltipContent
            message={message}
            position={{
              left: position.current?.left,
              top: position.current?.top,
            }}
          />
        </GlobalPortal.Consumer>
      )}
    </span>
  );
}
