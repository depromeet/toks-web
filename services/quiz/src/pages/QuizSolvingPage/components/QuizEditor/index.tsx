import { Button, useModal, useToast } from '@depromeet/toks-components';
import { Spacing } from '@toss/emotion-utils';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { SubmitModal } from 'common/components/ModalContents/SubmitModal';

import { postQuizAnswer } from './remotes/quiz';
import { Container, Wrapper } from './style';
import { isToksError } from '@depromeet/http';

const Editor = dynamic(() => import('@depromeet/toks-components/src/components/Editor/Editor'), { ssr: false });

export function QuizEditor() {
  const { open } = useToast();
  const { openModal } = useModal();

  const { mutateAsync: quizAnswerMutation, isSuccess } = useMutation(async () => {
    try {
      await postQuizAnswer({ answer, quizId });
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

  const {
    query: { quizIdParams },
  } = useRouter();
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
      children: (
        <>
          <SubmitModal quizId={quizId} />
        </>
      ),
    });
  };

  const onClick = () => {
    quizAnswerMutation();
    isSuccess ? openModalBox() : null;
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
