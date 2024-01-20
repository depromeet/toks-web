// import { Suspense } from 'react';

// import { Appbar } from './_components/Appbar';

export default function AppBarLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      {/* <Suspense>
        <Appbar />
      </Suspense> */}
      {children}
    </>
  );
}
