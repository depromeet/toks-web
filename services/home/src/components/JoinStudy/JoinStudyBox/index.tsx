import { JoinButton } from 'components/JoinStudy/JoinButton';
import { JoinInput } from 'components/JoinStudy/JoinInput';
import { StudyInfo } from 'components/JoinStudy/StudyIntro';
import { StudyStack } from 'components/JoinStudy/StudyStack';
import { StudyTitle } from 'components/JoinStudy/StudyTitle';
import { DescriptionContainer, JoinMessage, Wrapper } from './style';

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
        <div />
        <StudyInfo
          leftAddon={<div />}
          title={<span>우리 스터디는</span>}
          description={<span>{ourStudyDescription}</span>}
        />
        <StudyInfo
          leftAddon={<div />}
          title={<span>스터디 기간은</span>}
          start={<>시작일</>}
          startDate={<>{startDate}</>}
          done={<>종료일</>}
          doneDate={<>{doneDate}</>}
        />
        <StudyInfo
          leftAddon={<div />}
          title={<span>스터디 인원은</span>}
          description={<span>{personnelDescription}</span>}
        />
        <StudyInfo leftAddon={<div />} title={<span>나는 똑스 스터디에서</span>} />
      </DescriptionContainer>
      <JoinMessage>똑스와 8주간 함께해볼까요?</JoinMessage>
      <JoinButton />
    </Wrapper>
  );
}
