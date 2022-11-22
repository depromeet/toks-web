import { JoinButton } from 'components/JoinStudy/JoinButton';
import { JoinInput } from 'components/JoinStudy/JoinInput';
import { StudyInfo } from 'components/JoinStudy/StudyInfo';
import { StudyTitle } from 'components/JoinStudy/StudyTitle';
import { Tag } from '@depromeet/toks-components';
import { Txt } from '@depromeet/toks-components';

import {
  DateText,
  DateWrapper,
  DescriptionBox,
  DescriptionContainer,
  JoinMessage,
  TagContainer,
  Wrapper,
} from './style';

export function JoinStudyBox() {
  // mock data
  const ourStudyDescription = '아키텍쳐 크리너스로 소프트웨어 구조와 설계의 원칙 제대로 이해하기 ';
  const personnelDescription = '5-7명을 계획하고 있어요.';
  const startDate = '2022. 10. 13';
  const doneDate = '2022. 12. 03';
  const stacks = ['Java', 'Javascript', 'React'];
  return (
    <Wrapper>
      <StudyTitle />
      {stacks?.map(stack => (
        <TagContainer>
          <Tag>
            <Txt>{stack}</Txt>
          </Tag>
        </TagContainer>
      ))}
      <form>
        <DescriptionContainer>
          <StudyInfo
            leftAddon={<DescriptionBox />}
            title={<span>우리 스터디는</span>}
            description={
              <Txt size={16} weight={500}>
                {ourStudyDescription}
              </Txt>
            }
          />
          <StudyInfo
            leftAddon={<DescriptionBox />}
            title={<span>스터디 기간은</span>}
            description={
              <>
                <DateWrapper>
                  <Txt size={14} weight={500}>
                    시작일
                  </Txt>
                  <DateText>
                    {' '}
                    <Txt size={20} weight={700}>
                      {startDate}
                    </Txt>
                  </DateText>
                </DateWrapper>
                <DateWrapper>
                  <Txt size={14} weight={500}>
                    종료일
                  </Txt>
                  <DateText>
                    <Txt size={20} weight={700}>
                      {doneDate}
                    </Txt>
                  </DateText>
                </DateWrapper>
              </>
            }
          />
          <StudyInfo
            leftAddon={<DescriptionBox />}
            title={<span>스터디 인원은</span>}
            description={
              <Txt size={16} weight={500}>
                {personnelDescription}
              </Txt>
            }
          />
          <StudyInfo leftAddon={<DescriptionBox />} title={<span>스터디 기간은</span>} description={<JoinInput />} />
        </DescriptionContainer>
      </form>
      <JoinMessage>
        <Txt size={20} weight={700}>
          똑스와 8주간 함께해볼까요?
        </Txt>
      </JoinMessage>
      <JoinButton />
    </Wrapper>
  );
}
