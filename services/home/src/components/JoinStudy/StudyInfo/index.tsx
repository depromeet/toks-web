import { Text } from '@depromeet/toks-components';
import { ReactNode } from 'react';

import { DetailDescriptionText, StudyTitleStyle, TitleWrapper } from './style';

// 컴포넌트를 받을 때 ReactElement로 props를 받는게 맞는지 확인 필요.
// 공통 컴포넌트 개발이후에 스타일 일부 제거 필요.
type StudyInfoProps = {
  leftAddon: ReactNode;
  title: ReactNode;
  description?: ReactNode;
};
export function StudyInfo({ leftAddon, title, description }: StudyInfoProps) {
  return (
    <>
      <TitleWrapper>
        {leftAddon}
        <Text size={14} weight={700} css={StudyTitleStyle}>
          {title}
        </Text>
      </TitleWrapper>
      <DetailDescriptionText>{description}</DetailDescriptionText>
    </>
  );
}
