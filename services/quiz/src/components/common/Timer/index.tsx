import { theme } from '@depromeet/theme';
import { Text } from '@depromeet/toks-components';
import { HTMLAttributes } from 'react';
// import { ComponentProps } from 'react';

interface TimerProps extends HTMLAttributes<HTMLDivElement>  {
    openDate: Date;
}

// TODO: 아이콘들 Image로 되어있는것 추후 Icon 컴포넌트로 변경해야 함
export function Timer({ openDate, ...rest } : TimerProps) {

  return (
    <Text variant='title04' as='h4' {...rest}>00:00:00</Text>
  );
}
