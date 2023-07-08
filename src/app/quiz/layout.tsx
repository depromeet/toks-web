import React from 'react';

import { Carousel } from '@/components/pages/quiz';

type Props = {
  children: React.ReactNode;
};

function QuizLayout({ children }: Props) {
  return (
    <div>
      <div>{children}</div>
      <Carousel />
    </div>
  );
}

export default QuizLayout;
