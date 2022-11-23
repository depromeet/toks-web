import { Button, Image, Tag, Txt } from '@depromeet/toks-components';

import { StudyInfo } from 'components/JoinStudy/StudyInfo';
import { StudyTitle } from 'components/JoinStudy/StudyTitle';

import { ButtonContainer, DescriptionContainer, Wrapper, dateStyle, descriptionStyle, tagMargin } from './style';

export function JoinStudyBox() {
  // mock data
  const ourStudyDescription =
    '설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한';
  const personnelDescription = '5-7명을 계획하고 있어요.';
  const startDate = '2022. 10. 13';
  const doneDate = '2022. 12. 03';
  const stacks = ['Java', 'Javascript', 'React'];
  return (
    <Wrapper>
      <StudyTitle />
      {stacks?.map(stack => (
        <Tag css={tagMargin}>{stack}</Tag>
      ))}
      <form>
        <DescriptionContainer>
          <StudyInfo
            leftAddon={
              <Image
                width={16}
                height={22}
                src="https://toks-web-assets.s3.amazonaws.com/studyinfo-icon.svg"
                alt="StudyInfo 아이콘"
              />
            }
            title={'우리 스터디는'}
            description={
              <Txt css={descriptionStyle} size={16} weight={400}>
                {ourStudyDescription}
              </Txt>
            }
          />
          <StudyInfo
            leftAddon={
              <Image
                width={16}
                height={22}
                src="https://toks-web-assets.s3.amazonaws.com/studyinfo-icon.svg"
                alt="StudyInfo 아이콘"
              />
            }
            title={'스터디 기간은'}
            description={
              <>
                <Txt size={14} weight={400} css={dateStyle}>
                  시작일
                </Txt>
                <Txt size={16} weight={400}>
                  {startDate}
                </Txt>
                <Txt size={14} weight={400} css={dateStyle}>
                  종료일
                </Txt>
                <Txt size={16} weight={400}>
                  {doneDate}
                </Txt>
              </>
            }
          />
          <StudyInfo
            leftAddon={
              <Image
                width={16}
                height={22}
                src="https://toks-web-assets.s3.amazonaws.com/studyinfo-icon.svg"
                alt="StudyInfo 아이콘"
              />
            }
            title={'스터디 인원은'}
            description={
              <Txt size={16} weight={400} css={descriptionStyle}>
                {personnelDescription}
              </Txt>
            }
          />
        </DescriptionContainer>
      </form>
      <ButtonContainer>
        <Button>참여하기</Button>
      </ButtonContainer>
    </Wrapper>
  );
}
