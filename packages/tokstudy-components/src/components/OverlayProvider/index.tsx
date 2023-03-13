import { OverlayProvider as TossOverlayProvider } from '@toss/use-overlay';
import { ComponentProps, ReactNode, useEffect } from 'react';

import { useBeginningToast } from '../../hooks/useToast';

function HydrateToast({ children }: { children: ReactNode }) {
  const { open } = useBeginningToast();

  useEffect(() => {
    open();
  }, [open]);

  return <>{children}</>;
}

export function OverlayProvider({ children }: ComponentProps<typeof TossOverlayProvider>) {
  return (
    <TossOverlayProvider>
      <HydrateToast>{children}</HydrateToast>
    </TossOverlayProvider>
  );
}
