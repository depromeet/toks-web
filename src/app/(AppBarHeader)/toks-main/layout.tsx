import React, { PropsWithChildren } from 'react';

type Props = {
  toast: React.ReactNode;
  bottomSheet: React.ReactNode;
};

export default function ToksMainLayout({
  children,
  toast,
  bottomSheet,
}: PropsWithChildren<Props>) {
  return (
    <>
      {children}
      {toast}
      {bottomSheet}
    </>
  );
}
