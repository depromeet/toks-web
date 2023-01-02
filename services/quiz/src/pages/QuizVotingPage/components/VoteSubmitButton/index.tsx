import { Button, useModal } from '@depromeet/toks-components';
import { AnswerConfirmModal } from 'common/components/ModalContents/AnswerConfirmModal';
import { useRouter } from 'next/router';

export function VoteSubmitButton() {
  const { openModal } = useModal();
  const {
    query: { quizIdParams },
  } = useRouter();

  const openModalBox = async () => {
    await openModal({
      children: (
        <>
          <AnswerConfirmModal duration={100} quizId={Number(quizIdParams)} />
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
