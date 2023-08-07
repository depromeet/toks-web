import type { SuspenseProps } from 'react';
import React, { Suspense } from 'react';

import { useIsMounted } from '../hooks';

export const SSRSuspense = ({ fallback, ...rest }: SuspenseProps) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{fallback}</>;
  }

  return <Suspense {...rest} />;
};
