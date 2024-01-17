import React, { PropsWithChildren } from 'react';

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
      {userInfo}
      {children}
      {toast}
    </>
  );
}
