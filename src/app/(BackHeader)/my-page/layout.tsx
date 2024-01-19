import React, { PropsWithChildren, Suspense } from 'react';

import { SkeletonUserInfo } from './_components/SkeletonUserInfo.tsx';

type Props = {
  toast: React.ReactNode;
  userInfo: React.ReactNode;
};

export default function MyPageLayout({
  children,
  toast,
  userInfo,
}: PropsWithChildren<Props>) {
  return (
    <>
      <Suspense fallback={<SkeletonUserInfo />}>{userInfo}</Suspense>
      {children}
      {toast}
    </>
  );
}
