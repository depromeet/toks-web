import React from 'react';

type Props = {
  children: React.ReactNode;
};

function TestLayout({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default TestLayout;
