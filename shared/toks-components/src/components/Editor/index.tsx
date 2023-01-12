import { isServer } from '@toss/utils';
import React, { ComponentProps, forwardRef, Suspense } from 'react';

const EditorComponent = React.lazy(() => import('./Editor'));

export const Editor = forwardRef(
  (props: ComponentProps<typeof EditorComponent>, forwardRef: ComponentProps<typeof EditorComponent>['ref']) => {
    if (isServer()) {
      return null;
    }

    return (
      <Suspense fallback={null}>
        <EditorComponent {...props} ref={forwardRef} />
      </Suspense>
    );
  }
);
