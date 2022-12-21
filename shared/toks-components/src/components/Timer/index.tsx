import { useTimer } from '@depromeet/utils';

export function Timer() {
  const { time } = useTimer({ time: 2000 });
  return <div>{time}</div>;
}
