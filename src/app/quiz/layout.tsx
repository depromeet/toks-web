import React from 'react';

import QuizCarousel from './QuizCarousel';

type Props = {
  children: React.ReactNode;
};

function QuizLayout({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
      <QuizCarousel />
    </div>
  );
}

export default QuizLayout;
