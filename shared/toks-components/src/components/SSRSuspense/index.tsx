import { useIsMounted } from '@toss/react';
import { ComponentProps, Suspense } from 'react';

export function SSRSuspense(props: ComponentProps<typeof Suspense>) {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return <Suspense {...props} />;
}
