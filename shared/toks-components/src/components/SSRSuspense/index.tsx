import { ComponentProps, Suspense } from 'react';
import { useIsMounted } from '@toss/react';

export function SSRSuspense(props: ComponentProps<typeof Suspense>) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return <Suspense {...props} />;
}
