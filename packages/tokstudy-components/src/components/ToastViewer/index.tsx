import { isServer } from '@toss/utils';
import React, { ComponentProps, Suspense } from 'react';

const ToastViewerComponent = React.lazy(() => import('./ToastViewer'));

export function ToastViewer(props: ComponentProps<typeof ToastViewerComponent>) {
  if (isServer()) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <ToastViewerComponent {...props} />
    </Suspense>
  );
}
