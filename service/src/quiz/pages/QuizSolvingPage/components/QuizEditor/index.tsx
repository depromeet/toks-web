import { isToksError } from '@depromeet/http';
import { Button, useModal, useToast } from '@depromeet/toks-components';
import { usePathParam } from '@depromeet/utils';
import { Spacing } from '@toss/emotion-utils';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { SubmitModal } from 'quiz/common/components/ModalContents/SubmitModal';

import { postQuizAnswer } from './remotes/quiz';
import { Container, Wrapper } from './style';

const Editor = dynamic(() => import('@depromeet/toks-components/src/components/Editor/Editor'), { ssr: false });

export function QuizEditor() {
  const { open } = useToast();
  const { openModal } = useModal();

  const { mutateAsync: quizAnswerMutation } = useMutation(async () => {
    try {
      const res = await postQuizAnswer({ answer, quizId });
      if (res) {
        openModalBox();
      }
    } catch (err: unknown) {
      if (isToksError(err) && err.message === 'error.already.submitted') {
        await open({
          type: 'danger',
          title: '이미 퀴즈를 제출했습니다.',
          time: 2000,
        });
      }
    }
  });

  const [isDisabled, setIsDisabled] = useState(true);
  const [answer, setAnswer] = useState('');

  const quizIdParams = usePathParam('quizIdParams', { suspense: true });

  const quizId = Number(quizIdParams);

  //button disable 제어
  useEffect(() => {
    if (answer === '' || answer === '<p><br></p>') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [answer]);

  const openModalBox = async () => {
    await openModal({
      children: <SubmitModal quizId={quizId} />,
    });
  };

  const onClick = () => {
    quizAnswerMutation();
  };

  return (
    <Wrapper>
      <Container>
        <Editor onChange={data => setAnswer(data)} />
      </Container>
      <Spacing size={20} />
      <Button onClick={onClick} css={{ float: 'right' }} width={140} htmlType="submit" disabled={isDisabled}>
        제출하기
      </Button>
    </Wrapper>
  );
}
