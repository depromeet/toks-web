import { isToksError } from '@depromeet/http';
import { Button, useModal, useToast } from '@depromeet/toks-components';
import { calculateRemainingSecond } from '@depromeet/toks-components/src/utils';
import { usePathParam } from '@depromeet/utils';
import { Flex } from '@toss/emotion-utils';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { AnswerConfirmModal } from 'quiz/common/components/ModalContents/AnswerConfirmModal';
import { getQuizById } from 'quiz/common/components/QuizQuestion/remotes/quiz';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';

import { postQuizLike } from './remotes/quizVote';
import { useRecoilValue } from 'recoil';
import { votedAnswer } from '../../store/votedAnswer';

export function VoteSubmitButton() {
  const [isDisable, setIsDisable] = useState(true);
  const [quizReplyHistoryId, setQuizReplyHistoryId] = useState<number>();
  const { openModal } = useModal();
  const { open } = useToast();

  const votedAns = useRecoilValue(votedAnswer);

  useEffect(() => {
    if (votedAns != null) {
      setIsDisable(false);
      setQuizReplyHistoryId(votedAns.quizReplyHistoryId);
    }
  }, [votedAns]);

  const { mutateAsync: quizVoteMutation } = useMutation(async () => {
    try {
      const res = await postQuizLike(quizReplyHistoryId);
      if (res) {
        openModalBox();
      }
    } catch (err: unknown) {
      if (isToksError(err) && err.message === 'error.already.liked') {
        console.log(err);
        await open({
          type: 'danger',
          title: '이미 투표를 완료했습니다.',
          time: 2000,
        });
      }
    }
  });

  const quizIdParams = usePathParam('quizIdParams', { suspense: true });

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID(quizIdParams), () => getQuizById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  if (!quiz) {
    return null;
  }

  const durationTime = calculateRemainingSecond(new Date(quiz.timestamp), new Date(quiz.endedAt));

  const openModalBox = async () => {
    await openModal({
      children: <AnswerConfirmModal duration={durationTime} quizId={Number(quizIdParams)} />,
    });
  };

  const onClick = () => {
    quizVoteMutation();
  };
  return (
    <Flex css={{ position: 'absolute', bottom: '0%', left: '100%', transform: 'translateX( -200px )' }}>
      <Button
        onClick={onClick}
        css={{
          position: 'fixed',
        }}
        width={200}
        size="large"
        disabled={isDisable}
      >
        똑표완료
      </Button>
    </Flex>
  );
}
