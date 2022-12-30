import { PATHS, pushTo } from '@depromeet/path';
import { Button, Image, Tag, Text } from '@depromeet/toks-components';
import { Flex, Spacing, width100 } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { kstFormat } from '@toss/date';

import { QUERY_KEYS } from 'constants/queryKeys';
import { Wrapper } from 'pages/JoinStudy/components/JoinStudyBox/style';
import { StudyInfo } from 'pages/JoinStudy/components/StudyInfo';
import { getStudyById, postStudyById } from 'pages/JoinStudy/remotes/study';

import { STUDY_CATEGORY_OPTIONS } from './constants';

export function JoinStudyBox() {
  const {
    query: { studyId },
  } = useRouter();

  const { mutate: studyMutation } = useMutation(postStudyById, {
    onSuccess: () => (typeof studyId === 'string' ? pushTo(PATHS.quiz.studyDetail({ studyId })) : null),
  });

  const { data: study, isError } = useQuery([QUERY_KEYS.GET_STUDY_BY_ID], () => getStudyById(studyId), {
    enabled: Boolean(studyId),
  });

  if (isError || study == null) {
    return null;
  }

  const onClick = () => {
    studyMutation(studyId);
  };

  const personnelDescription = STUDY_CATEGORY_OPTIONS.find(v => v.label === study?.capacity);

  return (
    <Wrapper>
      <div>
        <Text variant="title03">{study.name}</Text>;{/* tag margin 위아래 10 고려하여 18->8 */}
        <Spacing size={8} />
        <Tag.Row>
          {study.tags.map(({ id, name }) => (
            <Tag key={id}>{name}</Tag>
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
          description={<Text variant="body01">{study.description}</Text>}
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
                {kstFormat(new Date(study.startedAt), 'yyyy. MM. dd E')}
              </Text>
              <Text variant="body02" color="gray040" css={{ marginLeft: '36px' }}>
                종료일
              </Text>
              <Text variant="body01" css={{ marginLeft: '12px' }}>
                {kstFormat(new Date(study.endedAt), 'yyyy. MM. dd E')}
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
          description={<Text variant="body01">{personnelDescription?.value}을 계획하고 있어요. </Text>}
        />
      </Flex>
      <Button css={width100} onClick={onClick}>
        참여하기
      </Button>
    </Wrapper>
  );
}
