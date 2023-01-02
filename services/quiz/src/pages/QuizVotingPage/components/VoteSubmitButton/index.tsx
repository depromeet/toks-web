import { isToksError } from '@depromeet/http';
import { Button, useModal, useToast } from '@depromeet/toks-components';
import { AnswerConfirmModal } from 'common/components/ModalContents/AnswerConfirmModal';
import { getQuizById } from 'common/components/QuizQuestion/remotes/quiz';
import { QUERY_KEYS } from 'constants/queryKeys';
import { useRouter } from 'next/router';
import { QuizReply } from 'pages/QuizVotingPage/hooks/quizReplyList';
import { useEffect, useState } from 'react';
import { useQuery, useMutation } from 'react-query';
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

  const { mutateAsync: quizVoteMutation, isSuccess } = useMutation(async () => {
    try {
      await postQuizLike(quizReplyHistoryId);
    } catch (err: unknown) {
      if (isToksError(err) && err.message === 'error.already.liked') {
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

  const openModalBox = async () => {
    await openModal({
      children: (
        <>
          <AnswerConfirmModal duration={quiz.durationOfSecond} quizId={Number(quizIdParams)} />
        </>
      ),
    });
  };

  const onClick = () => {
    quizVoteMutation();
    isSuccess ? openModalBox() : null;
  };
  return (
    <Button
      onClick={onClick}
      css={{ position: 'fixed', left: '100%', transform: 'translateX( -200px )', bottom: '20px' }}
      width={200}
      size="large"
      disabled={isDisable}
    >
      똑표완료
    </Button>
  );
}
