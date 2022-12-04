import { theme } from '@depromeet/theme';
import { Text } from '@depromeet/toks-components';
import { HTMLAttributes, useState, useEffect } from 'react';
// import { ComponentProps } from 'react';

interface TimerProps extends HTMLAttributes<HTMLDivElement>  {
    limitTime: string;
    quizItemType: string;
}

// TODO: 아이콘들 Image로 되어있는것 추후 Icon 컴포넌트로 변경해야 함
export function Timer({ limitTime, quizItemType, ...rest } : TimerProps) {
  const [timer, useTimer] = useState((quizItemType === "default")? "00:00:00" : limitTime)

  // useEffect(() => {
  //   const interval = setInterval(
  //     () =>
  //       setQuizItemType(getQuizItemType(openDate, limitDate))
  //     ,1000
  //   );

  //   return () => clearInterval(interval);
  // });

  return (
    <Text variant='title04' as='h4' {...rest}>00:00:00</Text>
  );
}
