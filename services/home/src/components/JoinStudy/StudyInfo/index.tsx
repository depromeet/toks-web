import { Txt } from '@depromeet/toks-components';
import { ReactElement } from 'react';

import { DetailDescriptionText, InfoTitle, TitleWrapper } from './style';

// 컴포넌트를 받을 때 ReactElement로 props를 받는게 맞는지 확인 필요.
// 공통 컴포넌트 개발이후에 스타일 일부 제거 필요.
type StudyInfoProps = {
  leftAddon: ReactElement;
  title: ReactElement;
  description?: ReactElement;
};
export function StudyInfo({ leftAddon, title, description }: StudyInfoProps) {
  return (
    <>
      <TitleWrapper>
        {leftAddon}
        <InfoTitle>
          <Txt size={16} weight={700}>
            {title}
          </Txt>
        </InfoTitle>
      </TitleWrapper>
      <DetailDescriptionText>{description}</DetailDescriptionText>
    </>
  );
}
