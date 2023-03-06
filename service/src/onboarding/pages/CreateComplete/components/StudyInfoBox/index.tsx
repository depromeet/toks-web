import { PATHS } from '@depromeet/path';
import { Button, Image, Tag, Text, getStudy, useClipboard } from '@depromeet/toks-components';
import { changeToDate } from '@depromeet/toks-components/src/utils';
import { usePathParam } from '@depromeet/utils';
import { kstFormat } from '@toss/date';
import { Flex, Spacing, gutter } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { STUDY_CATEGORY_OPTIONS } from 'onboarding/pages/CreateStudy/constants';

import { StudyInfo } from '../StudyInfo';
import { StudyTitle } from '../StudyTitle';
import { Wrapper } from './style';

export const StudyInfoBox = () => {
  const studyId = usePathParam('studyId', { suspense: true });
  const router = useRouter();

  const { copyToClipboard } = useClipboard();

  const { data: studyInfo, isError } = useQuery(['studyInfo', studyId], () => getStudy(Number(studyId)), {
    enabled: Boolean(studyId),
  });

  if (isError || !studyInfo) {
    return null;
  }

  const { name, description, startedAt, endedAt, capacity, tags } = studyInfo;

  const studyCategory = STUDY_CATEGORY_OPTIONS.find(({ value }) => value === capacity)?.label;
  const inviteLink = `${window.location.origin}/home/join-study/${studyId}`;

  const startDate = changeToDate(new Date(studyInfo!.startedAt));
  const todayDate = changeToDate(new Date());
  return (
    <Wrapper>
      <div>
        <StudyTitle title={name} />
        {tags.length > 0 && (
          <>
            <Spacing size={8} />
            <Tag.Row>
              {tags?.map(({ id, name }) => (
                <Tag key={id} value={name} />
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
          description={<Text variant="body01">{description}</Text>}
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
                {kstFormat(new Date(startedAt), 'yyyy. MM. dd E')}
              </Text>
              <Text variant="body02" color="gray040" css={{ marginLeft: '36px' }}>
                종료일
              </Text>
              <Text variant="body01" css={{ marginLeft: '12px' }}>
                {kstFormat(new Date(endedAt), 'yyyy. MM. dd E')}
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
          description={<Text variant="body01">{studyCategory}을 계획하고 있어요.</Text>}
        />
      </Flex>
      <Flex css={gutter('horizontal', 24)}>
        <Button
          type="general"
          onClick={() => {
            todayDate < startDate ? router.push(PATHS.home.myStudy) : router.push(PATHS.quiz.studyDetail({ studyId }));
          }}
        >
          완료
        </Button>
        <Button
          icon="ic-link"
          css={{
            gap: '8px',
          }}
          onClick={() => copyToClipboard(inviteLink)}
        >
          링크 공유하기
        </Button>
      </Flex>
    </Wrapper>
  );
};
