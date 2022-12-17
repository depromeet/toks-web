import { KeyOfColors, theme } from '@depromeet/theme';
import { Button, Icon, Text, UserAvatar } from '@depromeet/toks-components';
import { ComponentProps, Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Divider } from 'components/common/Divider';
import { QuizResponse, QuizStatus } from '@depromeet/toks-components/src/types/quiz';
import { convertMilliSecondToString, getQuizItemType, getTimerByQuizType } from 'utils/quizList';

import { FlexRow, Item, ItemBody, ItemDetails, ItemHeader, Space } from './style';

interface QuizItemProps {
  round: number;
  quiz: QuizResponse;
  setAddQuizState: Dispatch<SetStateAction<boolean>>;
}

type QuizItemColorMap = {
  [key in QuizStatus]: {
    button: ComponentProps<typeof Button>['type'];
    timer: KeyOfColors;
  };
};

const QUIZ_ITEM_COLOR: QuizItemColorMap = {
  "DONE": {
    button: 'general',
    timer: 'gray060',
  },
  "TO_DO": {
    button: 'primary',
    timer: 'primary',
  },
  "IN_PROGRESS": {
    button: 'primary',
    timer: 'primary',
  }
};



// TODO: 카운트 돌아가고 있을시 첫 렌더링에 반영되도록 해야함.
// TODO: 퀴즈 추가 버튼 1초 늦게 나오는 문제 해결해야 함,,,
export function QuizItem({ round, quiz, setAddQuizState }: QuizItemProps) {
  const limitDate = new Date(quiz.endedAt);
  const openDate = new Date(quiz.startedAt);
  const [quizItemType, setQuizItemType] = useState(quiz.quizStatus as QuizStatus);
  const [timer, setTimer] = useState(
    quizItemType === 'DONE' ? '00:00:00' : convertMilliSecondToString(quiz.durationOfSecond * 1000)
  );
  const [isFold, setIsFold] = useState(quizItemType !== 'DONE');

  const onFold = () => setIsFold(!isFold);

  // TODO: useInterval 사용으로 추후 변경해봐야 함
  useEffect(() => {
    const interval = setInterval(() => {
      setQuizItemType(getQuizItemType(openDate, limitDate));
      setTimer(getTimerByQuizType(quizItemType, quiz.durationOfSecond, limitDate));
      if (round === 0 && quizItemType === 'DONE') {
        setAddQuizState(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <Item css={{ backgroundColor: theme.colors.gray110 }}>
      <ItemDetails open={isFold} onToggle={onFold}>
        <ItemHeader>
          <Text variant="subhead" css={{ margin: '0' }} as="h6">
            {round}회차
          </Text>
          <Text variant="headline" css={{ margin: '0 0 0 18px', flex: 1 }} as="h5">
            {quiz.quiz}
          </Text>
          {quizItemType === 'TO_DO' ? (
            <Text color="primary" variant="body02" css={{ margin: '0 18px 0 0' }}>
              기다려주세요!
            </Text>
          ) : null}
          <Button
            type={QUIZ_ITEM_COLOR[quizItemType].button}
            width={140}
            disabled={quizItemType === 'TO_DO'}
            size="medium"
          >
            똑스 확인하기
          </Button>
          {isFold ? (
            <Icon iconName="ic-chevron-up" height={24} css={{ marginLeft: '24px' }} />
          ) : (
            <Icon iconName="ic-chevron-down" height={24} css={{ marginLeft: '24px' }} />
          )}
        </ItemHeader>
        <ItemBody>
          <FlexRow css={{ marginTop: '36px' }}>
            <Icon iconName="ic-time" height={24} css={{ marginLeft: '3.2px' }} />
            <Text variant="title04" color={QUIZ_ITEM_COLOR[quizItemType].timer} css={{ margin: '0 0 0 9.2px' }} as="h4">
              {timer}
            </Text>
          </FlexRow>
          <Divider css={{ marginTop: '22.25px' }} />
          <FlexRow css={{ marginTop: '14px' }}>
            <Text variant="subhead" css={{ margin: '0 0 0 0' }} as="h6">
              똑스 만든사람
            </Text>
            <UserAvatar
              image={quiz.creator.profileImageUrl}
              userName={quiz.creator.nickname}
              css={{ margin: '0 0 0 22px' }}
              size="large"
              className={`avatar--user_${quiz.creator.userId}`}
              tooltip={true}
            />
            <Space css={{ flex: 1 }} />
            <Text variant="subhead" css={{ margin: '0' }} as="h6">
              똑스 안 푼 사람
            </Text>
            <UserAvatar.Group view={6} id="8" groupType="quiz" css={{ margin: '0 0 0 22px' }}>
              {quiz.unSubmitters.map(user => (
                <UserAvatar
                  key={user.userId}
                  image={user.profileImageUrl}
                  userName={user.nickname}
                  size="large"
                  className={`avatar--user_${user.userId}`}
                  tooltip={true}
                />
              ))}
            </UserAvatar.Group>
          </FlexRow>
        </ItemBody>
      </ItemDetails>
    </Item>
  );
}
