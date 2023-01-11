import { isToksError } from '@depromeet/http';
import { PATHS } from '@depromeet/path';
import { Button, Image, Tag, Text, getStudy, useToast } from '@depromeet/toks-components';
import { useChangeToDate, usePathParam } from '@depromeet/utils';
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
  const studyId = usePathParam('studyId', { suspense: true });
  const router = useRouter();
  const { open } = useToast();

  const { data: study, isError } = useQuery([QUERY_KEYS.GET_STUDY_BY_ID], () => getStudy(Number(studyId)), {
    enabled: Boolean(studyId),
  });

  if (isError || study == null) {
    return null;
  }

  const startDate = useChangeToDate(new Date(study.startedAt));
  const todayDate = useChangeToDate(new Date());

  const { mutate: studyMutation } = useMutation(async () => {
    try {
      await postStudyById(studyId);
      todayDate < startDate
        ? await router.push(PATHS.home.myStudy)
        : await router.push(PATHS.quiz.studyDetail({ studyId }));
    } catch (err: unknown) {
      if (isToksError(err) && err.message === 'error.invalid.already-join-user') {
        await open({
          type: 'danger',
          title: '이미 해당 스터디에 참여하고 있습니다.',
          time: 2000,
        });
      }
    }
  });

  const onClick = () => {
    studyMutation();
  };

  const personnelDescription = STUDY_CATEGORY_OPTIONS.find(v => v.label === study?.capacity);

  return (
    <Wrapper>
      <div>
        <Text variant="title03">{study.name}</Text>;{/* tag margin 위아래 10 고려하여 18->8 */}
        {study.tags.length > 0 && (
          <>
            <Spacing size={8} />
            <Tag.Row>
              {study.tags.map(({ id, name }) => (
                <Tag key={id}>{name}</Tag>
              ))}
            </Tag.Row>
          </>
        )}
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
