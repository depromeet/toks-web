import { JoinButton } from 'components/JoinStudy/JoinButton';
import { JoinInput } from 'components/JoinStudy/JoinInput';
import { DetailDescription } from 'components/JoinStudy/DetailDescription';
import { StudyDate } from 'components/JoinStudy/StudyDate';
import { StudyDescription } from 'components/JoinStudy/StudyDescription';
import { StudyStack } from 'components/JoinStudy/StudyStack';
import { StudyTitle } from 'components/JoinStudy/StudyTitle';
import { DateWrapper, DescriptionContainer, JoinMessage, Wrapper } from './style';

export function JoinStudyBox() {
    // mock data
  const ourStudyDescription = '아키텍쳐 크리너스로 소프트웨어 구조와 설계의 원칙 제대로 이해하기 ';
  const personnelDescription = '5-7명을 계획하고 있어요.';
  const startDate = '2022. 10. 13';
  const doneDate = '2022. 12. 03';
  return (
    <Wrapper>
      <StudyTitle />
      <StudyStack />
      <DescriptionContainer>
        <StudyDescription descriptionText='우리 스터디는' />
        <DetailDescription detailDescription={ourStudyDescription} />
        <StudyDescription descriptionText='스터디 기간은' />
        <DateWrapper>
          <StudyDate when='시작일' date={startDate} />
          <StudyDate when='종료일' date={doneDate} />
        </DateWrapper>
        <StudyDescription descriptionText='스터디 인원은' />
        <DetailDescription detailDescription={personnelDescription} />
        <StudyDescription descriptionText='나는 똑스 스터디에서' />
        <JoinInput />
      </DescriptionContainer>
      <JoinMessage>똑스와 8주간 함께해볼까요?</JoinMessage>
      <JoinButton />
    </Wrapper>
  );
}
