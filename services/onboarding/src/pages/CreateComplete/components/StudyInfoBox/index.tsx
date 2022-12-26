import { Button, Icon, Image, Tag, Text, useClipboard } from '@depromeet/toks-components';
import { Flex, Spacing, gutter } from '@toss/emotion-utils';
// import { useRouter } from 'next/router';

import { StudyInfo } from '../StudyInfo';
import { StudyTitle } from '../StudyTitle';
import { Wrapper } from './style';

export const StudyInfoBox = () => {
  // TODO: studyId를 받아서 서버에서 정보를 가져와야 합니다.
  // const {
  //   query: { studyId },
  // } = useRouter();

  const { copyToClipboard } = useClipboard();

  const ourStudyDescription =
    '설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한입니다 설명은 100자 제한';
  const personnelDescription = '5-7명을 계획하고 있어요.';
  const startDate = '2022. 10. 13';
  const endDate = '2022. 12. 03';
  const tags = ['Java', 'JavaScript', 'React'];

  return (
    <Wrapper>
      <div>
        <StudyTitle />
        {/* tag margin 위아래 10 고려하여 18->8 */}
        <Spacing size={8} />
        <Tag.Row>
          {tags?.map(tag => (
            <Tag key={tag} color="highlight">
              {tag}
            </Tag>
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
      <Flex css={gutter('horizontal', 24)}>
        <Button type="general">완료</Button>
        <Button
          css={{
            gap: '8px',
          }}
          onClick={() => copyToClipboard('테스트')}
        >
          <Icon size={28} iconName="ic-link" />
          <Text variant="headline">링크 공유하기</Text>
        </Button>
      </Flex>
    </Wrapper>
  );
};
