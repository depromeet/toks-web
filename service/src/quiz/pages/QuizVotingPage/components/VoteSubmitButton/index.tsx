import { isToksError } from '@depromeet/http';
import { Button, useModal, useToast } from '@depromeet/toks-components';
import { calculateRemainingSecond } from '@depromeet/toks-components/src/utils';
import { Flex } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';

import { AnswerConfirmModal } from 'quiz/common/components/ModalContents/AnswerConfirmModal';
import { getQuizById } from 'quiz/common/components/QuizQuestion/remotes/quiz';
import { QUERY_KEYS } from 'quiz/constants/queryKeys';
import { QuizReply } from 'quiz/pages/QuizVotingPage/hooks/quizReplyList';

import { postQuizLike } from './remotes/quizVote';

export function VoteSubmitButton() {
  const [isDisable, setIsDisable] = useState(true);
  const [quizReplyHistoryId, setQuizReplyHistoryId] = useState<number>();
  const { openModal } = useModal();
  const { open } = useToast();

  const { data: ans } = useQuery<QuizReply>(QUERY_KEYS.GET_QUIZREPLY, {
    initialData: null,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (ans != null) {
      setIsDisable(false);
      setQuizReplyHistoryId(ans.quizReplyHistoryId);
    }
  }, [ans]);

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

  const {
    query: { quizIdParams },
  } = useRouter();

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID, () => getQuizById(quizIdParams), {
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
