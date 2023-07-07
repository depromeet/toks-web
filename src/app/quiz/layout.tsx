import { Carousel } from '@/components/pages/quiz';
import React from 'react';

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
