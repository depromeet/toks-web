import { PATHS } from '@depromeet/path';
import { Button, Image, Tag, Text, getStudy } from '@depromeet/toks-components';
import { assert } from '@toss/assert';
import { kstFormat } from '@toss/date';
import { Flex, Spacing, width100 } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';

import { QUERY_KEYS } from 'home/constants/queryKeys';
import { Wrapper } from 'home/pages/JoinStudy/components/JoinStudyBox/style';
import { StudyInfo } from 'home/pages/JoinStudy/components/StudyInfo';
import { postStudyById } from 'home/pages/JoinStudy/remotes/study';

import { STUDY_CATEGORY_OPTIONS } from './constants';

export function JoinStudyBox() {
  const {
    query: { studyId },
  } = useRouter();
  const router = useRouter();

  assert(typeof studyId === 'string', '유효하지 않은 스터디입니다.');

  const { mutate: studyMutation } = useMutation(async () => {
    try {
      await postStudyById(studyId);
      await router.push(PATHS.quiz.studyDetail({ studyId }));
    } catch (err) {
      console.log(err);
    }
  });

  const { data: study, isError } = useQuery([QUERY_KEYS.GET_STUDY_BY_ID], () => getStudy(Number(studyId)), {
    enabled: Boolean(studyId),
  });

  if (isError || study == null) {
    return null;
  }

  const onClick = () => {
    studyMutation();
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
