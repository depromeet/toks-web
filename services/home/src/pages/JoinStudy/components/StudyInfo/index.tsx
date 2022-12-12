import { Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { ReactNode } from 'react';

// 컴포넌트를 받을 때 ReactElement로 props를 받는게 맞는지 확인 필요.
// 공통 컴포넌트 개발이후에 스타일 일부 제거 필요.
type StudyInfoProps = {
  leftAddon: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};
export function StudyInfo({ leftAddon, title, description }: StudyInfoProps) {
  return (
    <div>
      <Flex css={{ gap: '11px' }}>
        {leftAddon}
        <Text variant="subhead">{title}</Text>
      </Flex>
      <Spacing size={12} />
      <Text>{description}</Text>
    </div>
  );
}
