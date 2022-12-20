import { isServer } from '@toss/utils';
import React, { ComponentProps, Suspense } from 'react';

const EditorComponent = React.lazy(() => import('./Editor'));

export function Editor(props: ComponentProps<typeof EditorComponent>) {
  if (isServer()) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <EditorComponent {...props} />
    </Suspense>
  );
}
