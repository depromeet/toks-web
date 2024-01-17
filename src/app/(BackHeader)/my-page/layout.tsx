import React, { PropsWithChildren } from 'react';

type Props = {
  toast: React.ReactNode;
};

export default function MyPageLayout({
  children,
  toast,
}: PropsWithChildren<Props>) {
  return (
    <>
      {children}
      {toast}
    </>
  );
}
