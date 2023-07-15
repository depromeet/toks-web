import React from 'react';

function ToksMainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}

export default ToksMainLayout;
