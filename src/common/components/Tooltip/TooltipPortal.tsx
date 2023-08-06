'use-client';

import { createPortal } from 'react-dom';

export const TooltipPortal = ({ children }: { children: React.ReactNode }) => {
  const portalRoot = document.getElementById('portal');

  if (!portalRoot) {
    return null;
  }

  return createPortal(children, portalRoot);
};
