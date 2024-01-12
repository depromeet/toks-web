'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { bgColor } from '@/common';

import { QuizButtonProps } from './type';

const usePercentageAnimation = (percentage: number) => {
  const [percentageAnimation, setPercentageAnimation] = useState(0);
  useEffect(() => {
    setPercentageAnimation(percentage);
  }, [percentageAnimation, percentage]);
  return percentageAnimation;
};

export function ProgressBar({
  percentage = 0,
  isSelected,
}: Pick<QuizButtonProps, 'percentage' | 'isSelected'>) {
  const percentageAnimation = usePercentageAnimation(percentage);
  return (
    <div
      style={{
        width: `${percentageAnimation}%`,
        transition: 'width 0.5s ease',
      }}
      className={clsx(
        isSelected ? bgColor['primaryDefault'] : bgColor['gray60'],
        'absolute z-0 h-full rounded-8px'
      )}
    />
  );
}
