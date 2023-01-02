import { Button, useModal } from '@depromeet/toks-components';
import { AnswerConfirmModal } from 'common/components/ModalContents/AnswerConfirmModal';
import { getQuizById } from 'common/components/QuizQuestion/remotes/quiz';
import { QUERY_KEYS } from 'constants/queryKeys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

export function VoteSubmitButton() {
  const { openModal } = useModal();
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
    openModalBox();
  };
  return (
    <Button
      onClick={onClick}
      css={{ position: 'fixed', left: '100%', transform: 'translateX( -200px )', bottom: '20px' }}
      width={200}
      size="large"
    >
      똑표완료
    </Button>
  );
}
