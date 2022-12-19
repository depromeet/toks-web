import { isServer } from '@toss/utils';
import React, { ComponentProps, Suspense } from 'react';

const Editor = React.lazy(() => import('./Editor'));

export function SSRSafeEditor(props: ComponentProps<typeof Editor>) {
  if (isServer()) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <Editor {...props} />
    </Suspense>
  );
}
