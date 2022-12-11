import { Button, Image, Tag, Text } from '@depromeet/toks-components';
import { Flex, Spacing, width100 } from '@toss/emotion-utils';

import { StudyInfo } from 'pages/JoinStudy/components/StudyInfo';
import { StudyTitle } from 'pages/JoinStudy/components/StudyTitle';
import { Wrapper } from 'pages/JoinStudy/components/JoinStudyBox/style';

export function JoinStudyBox() {
  // mock data
  const ourStudyDescription =
    '설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한';
  const personnelDescription = '5-7명을 계획하고 있어요.';
  const startDate = '2022. 10. 13';
  const endDate = '2022. 12. 03';
  const tags = ['Java', 'Javascript', 'React'];
  return (
    <Wrapper>
      <div>
        <StudyTitle />
        {/* tag margin 위아래 10 고려하여 18->8 */}
        <Spacing size={8} />
        <Tag.Row>
          {tags?.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tag.Row>
      </div>
      <Flex direction="column" css={{ gap: '32px' }}>
        <StudyInfo
          leftAddon={
            <Image
              width={16}
              height={22}
              src="https://toks-web-assets.s3.amazonaws.com/studyinfo-icon.svg"
              alt="StudyInfo 아이콘"
            />
          }
          title="우리 스터디는"
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
          title="스터디 기간은"
          description={
            <>
              <Text variant="body02" color="gray040">
                시작일
              </Text>
              <Text variant="body01" css={{ marginLeft: '12px' }}>
                {startDate}
              </Text>
              <Text variant="body02" color="gray040" css={{ marginLeft: '36px' }}>
                종료일
              </Text>
              <Text variant="body01" css={{ marginLeft: '12px' }}>
                {endDate}
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
          title="스터디 인원은"
          description={<Text variant="body01">{personnelDescription}</Text>}
        />
      </Flex>
      <Button css={width100}>참여하기</Button>
    </Wrapper>
  );
}
