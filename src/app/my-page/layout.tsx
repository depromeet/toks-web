import React from 'react';

type Props = {
  children: React.ReactNode;
};

function MyPageLayout({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default MyPageLayout;
