import { PATHS } from '@depromeet/path';
import { theme } from '@depromeet/theme';
import { Button, Lottie, Tag, Text, TextBallon, useToast } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex, Spacing, padding, width100 } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { match } from 'ts-pattern';

import { formatStartedAtDay, formatStartedAtToDecimalDay } from 'home/utils';

import { Study } from '../../models/study';

interface Props {
  onClick: VoidFunction;
  memberCount: number;
  studyId: number;
  title: Study['name'];
  tags: Study['tags'];
  quizStatus: Study['latestQuizStatus'];
  studyStatus: Study['status'];
  startedAt: Study['startedAt'];
}

const LOTTIE_MAP = {
  sleep: 'https://toks-web-assets.s3.amazonaws.com/lottie-toks-sleep.json',
  awake: 'https://asset.tokstudy.com/lottie-toks-awake.json',
  graduated: 'https://asset.tokstudy.com/lottie-toks-graduate.json',
  wait: 'https://asset.tokstudy.com/lottie-toks-wait.json',
} as const;

function StudyCard({ title, tags, onClick, memberCount, quizStatus, studyStatus, studyId, startedAt }: Props) {
  const router = useRouter();
  const { open } = useToast();

  return (
    <div
      css={{ position: 'relative' }}
      onClick={() => {
        if (studyStatus === 'READY') {
          open({ title: '아직 스터디가 열리지 않았어요!', type: 'danger' });
        }
      }}
    >
      {match({ quizStatus, studyStatus })
        .when(
          ({ studyStatus }) => studyStatus === 'READY',
          () => {
            const diffDays = formatStartedAtToDecimalDay(startedAt);
            const text = `시작까지 ${diffDays}일 남았어요!`;

            return <TextBallon title={text} />;
          }
        )
        .when(
          ({ quizStatus }) => quizStatus === 'UNCHECKED',
          () => (
            <TextBallon
              title="우수 답변을 확인해보세요!"
              onClick={() => router.push(PATHS.quiz.studyDetail({ studyId }))}
            />
          )
        )
        .when(
          ({ quizStatus }) => quizStatus === 'UNSOLVED',
          () => (
            <TextBallon
              title="새로운 똑스가 추가되었어요!"
              onClick={() => router.push(PATHS.quiz.studyDetail({ studyId }))}
            />
          )
        )
        .otherwise(() => null)}

      <Card>
        {memberCount > 0 && (
          <Text size={14} weight={400} color="gray050" css={{ lineHeight: '20px', alignSelf: 'flex-end' }}>
            {memberCount}명 입장
          </Text>
        )}

        <Spacing size={12} />

        <Flex.Center
          css={{
            position: 'absolute',
            border: 'none',
            borderRadius: '50%',
            top: '42px',
          }}
        >
          <Lottie
            src={match({ studyStatus, quizStatus })
              .when(
                ({ studyStatus }) => studyStatus === 'FINISH',
                () => LOTTIE_MAP.graduated
              )
              .when(
                ({ quizStatus }) => quizStatus === 'UNCHECKED' || quizStatus === 'UNSOLVED',
                () => LOTTIE_MAP.awake
              )
              .when(
                ({ studyStatus }) => studyStatus === 'READY',
                () => LOTTIE_MAP.wait
              )
              .otherwise(() => LOTTIE_MAP.sleep)}
            alt=""
            width={130}
            height={130}
            loop
            css={{ transform: studyStatus === 'FINISH' ? 'translate(0px, -10px)' : undefined }}
          />
        </Flex.Center>

        <Spacing size={124} />

        <LimitLineText variant="title04">{title}</LimitLineText>

        <Spacing size={16} />

        <Tag.Row css={[width100, padding(0)]}>
          {tags.map(tag => (
            <Tag value={tag.name} key={tag.id} />
          ))}
        </Tag.Row>

        <Spacing size={50} />
        {studyStatus === 'READY' ? (
          <Text variant="body01">{formatStartedAtDay(startedAt)}에 만나요</Text>
        ) : (
          <Button
            type={match({ quizStatus, studyStatus })
              .when(
                ({ quizStatus }) => quizStatus === 'UNCHECKED',
                () => 'primary' as const
              )
              .when(
                ({ quizStatus }) => quizStatus === 'UNSOLVED',
                () => 'primary' as const
              )

              .otherwise(() => 'general' as const)}
            css={{ justifySelf: 'flex-end' }}
            onClick={onClick}
          >
            {studyStatus === 'FINISH' ? '복습하기' : '입장하기'}
          </Button>
        )}
      </Card>
    </div>
  );
}

function Plus({ onClick, studyCount }: { onClick: () => void; studyCount: number }) {
  return (
    <div css={{ position: 'relative' }}>
      {studyCount === 0 ? <TextBallon title="스터디를 추가해보세요!" /> : null}
      <Card
        css={{
          justifyContent: 'center',
          gap: '18px',
          boxShadow: 'none',
          border: 'none',
        }}
        onClick={onClick}
      >
        <Flex.Center
          css={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: theme.colors.gray090 }}
        >
          <i className="pi pi-plus" style={{ fontSize: '36px', color: theme.colors.white }} />
        </Flex.Center>
        <Text variant="headline" color="gray070">
          스터디 만들기
        </Text>
      </Card>
    </div>
  );
}

const Card = styled.li`
  position: relative;
  min-width: 280px;
  width: 280px;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px;
  background-color: ${theme.colors.gray110};
  border: 1px solid ${theme.colors.gray100};
  border-radius: 32px;

  &:hover {
    cursor: pointer;
    transform: scale(102%);
  }

  transition: transform 100ms ease-in-out;

  ${theme.shadows.book01}
`;

const LimitLineText = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 72px;
  max-height: 72px;
  height: 72px;
  text-align: center;
  text-overflow: ellipsis;
  max-width: 100%;
`;

StudyCard.Plus = Plus;
StudyCard.Skeleton = Card;

export default StudyCard;
