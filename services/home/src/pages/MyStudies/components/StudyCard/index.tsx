import { PATHS, pushTo } from '@depromeet/path';
import { theme } from '@depromeet/theme';
import { Button, Lottie, Tag, Text, TextBallon } from '@depromeet/toks-components';
import styled from '@emotion/styled';
import { Flex, Spacing, padding, width100 } from '@toss/emotion-utils';
import { match } from 'ts-pattern';

import { Study } from '../../models/study';

interface Props {
  onClick: VoidFunction;
  memberCount: number;
  studyId: number;
  title: Study['name'];
  tags: Study['tags'];
  quizStatus: Study['latestQuizStatus'];
  studyStatus: Study['status'];
}

const LOTTIE_MAP = {
  sleep: 'https://asset.tokstudy.com/lottie-toks-sleep.json',
  awake: 'https://asset.tokstudy.com/lottie-toks-base.json',
  graduated: 'https://asset.tokstudy.com/lottie-toks-graduated.json',
} as const;

function StudyCard({ title, tags, onClick, memberCount, quizStatus, studyStatus, studyId }: Props) {
  return (
    <div css={{ position: 'relative' }}>
      {match(quizStatus)
        .with('UNCHECKED', () => (
          <TextBallon title="우수 답변을 확인해보세요!" onClick={() => pushTo(PATHS.quiz.studyDetail({ studyId }))} />
        ))
        .with('UNSOLVED', () => (
          <TextBallon
            title="똑스대장님이 똑스를 추가했어요!"
            onClick={() => pushTo(PATHS.quiz.studyDetail({ studyId }))}
          />
        ))
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
            boxShadow: '0 0 30px #FEE101',
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
              .otherwise(() => LOTTIE_MAP.sleep)}
            alt=""
            width={90}
            height={90}
            loop
            css={{ scale: '102%' }}
          />
        </Flex.Center>

        <Spacing size={124} />

        <LimitLineText variant="title04">{title}</LimitLineText>

        <Spacing size={17} />

        <Tag.Row css={[width100, padding(0)]}>
          {tags.map(tag => (
            <Tag value={tag.name} key={tag.id} />
          ))}
        </Tag.Row>

        <Spacing size={51} />

        <Button
          type={match(quizStatus)
            .with('UNCHECKED', 'UNSOLVED', () => 'primary' as const)
            .otherwise(() => 'general' as const)}
          css={{ justifySelf: 'flex-end' }}
          onClick={onClick}
        >
          입장하기
        </Button>
      </Card>
    </div>
  );
}

function Plus({ onClick }: { onClick: () => void }) {
  return (
    <Card
      css={{
        justifyContent: 'center',
        gap: '18px',
        boxShadow: 'none',
        border: 'none',
      }}
      onClick={onClick}
    >
      <Flex.Center css={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: theme.colors.gray090 }}>
        <i className="pi pi-plus" style={{ fontSize: '36px', color: theme.colors.white }} />
      </Flex.Center>
      <Text variant="headline" color="gray070">
        스터디 만들기
      </Text>
    </Card>
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
`;

StudyCard.Plus = Plus;
StudyCard.Skeleton = Card;

export default StudyCard;
