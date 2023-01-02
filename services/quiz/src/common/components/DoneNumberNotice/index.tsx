import { Text } from '@depromeet/toks-components';

export function DoneNumberNotice({ done }: { done: number }) {
  return (
    <Text variant="body02" color="gray050">
      지금까지 {done}명이 공부를 완료했어요!🥳
    </Text>
  );
}
