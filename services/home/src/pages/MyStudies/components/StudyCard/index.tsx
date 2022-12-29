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
  tags: Study['studyTags'];
  quizStatus: Study['StudylatestquizStatus'];
}

const LOTTIE_MAP = {
  sleep: 'https://asset.tokstudy.com/lottie-toks-sleep.json',
  awake: 'https://asset.tokstudy.com/lottie-toks-base.json',
  graduated: 'https://asset.tokstudy.com/lottie-toks-graduated.json',
} as const;

function StudyCard({ title, tags, onClick, memberCount, quizStatus, studyId }: Props) {
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

        {/* TODO: 스터디 끝나면 graduated 연결  */}
        <Lottie
          src={match(quizStatus)
            .with('UNCHECKED', 'UNSOLVED', () => LOTTIE_MAP.awake)
            .otherwise(() => LOTTIE_MAP.sleep)}
          alt=""
          width={84}
          height={84}
          css={{ scale: '195%' }}
        />

        <Spacing size={24} />

        <Text variant="title04" css={{ minHeight: '72px', textAlign: 'center', textOverflow: 'ellipsis' }}>
          {title}
        </Text>

        <Spacing size={18} />

        <Tag.Row css={[width100, padding(0)]}>
          {tags.map(tag => (
            <Tag value={tag.name} key={tag.id} />
          ))}
        </Tag.Row>

        <Spacing size={52} />

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

StudyCard.Plus = Plus;
StudyCard.Skeleton = Card;

export default StudyCard;
