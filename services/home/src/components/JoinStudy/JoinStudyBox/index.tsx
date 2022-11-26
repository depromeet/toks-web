import { Button, Image, Tag, Text } from '@depromeet/toks-components';
import { width100 } from '@toss/emotion-utils';

import { StudyInfo } from 'components/JoinStudy/StudyInfo';
import { StudyTitle } from 'components/JoinStudy/StudyTitle';

import { Wrapper, dateStyle } from './style';

export function JoinStudyBox() {
  // mock data
  const ourStudyDescription =
    '설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한';
  const personnelDescription = '5-7명을 계획하고 있어요.';
  const startDate = '2022. 10. 13';
  const doneDate = '2022. 12. 03';
  const tags = ['Java', 'Javascript', 'React'];
  return (
    <Wrapper>
      <div>
        <StudyTitle />
        <Tag.Row>
          {tags?.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tag.Row>
      </div>

      <div>
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
          description={<Text variant="body01">{ourStudyDescription}</Text>}
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
              <Text size={14} weight={400} css={dateStyle}>
                시작일
              </Text>
              <Text size={16} weight={400}>
                {startDate}
              </Text>
              <Text size={14} weight={400} css={dateStyle}>
                종료일
              </Text>
              <Text size={16} weight={400}>
                {doneDate}
              </Text>
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
            <Text size={16} weight={400}>
              {personnelDescription}
            </Text>
          }
        />
      </div>

      <Button css={width100}>참여하기</Button>
    </Wrapper>
  );
}
