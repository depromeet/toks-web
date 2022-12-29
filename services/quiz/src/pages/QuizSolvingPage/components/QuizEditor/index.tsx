import { Button, useModal } from '@depromeet/toks-components';
import { Spacing } from '@toss/emotion-utils';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { SubmitModal } from '../ModalContents/SubmitModal';
import { postQuizAnswer } from './remotes/quiz';
import { Container, Wrapper } from './style';

const Editor = dynamic(() => import('@depromeet/toks-components/src/components/Editor/Editor'), { ssr: false });

export function QuizEditor() {
  const { open } = useModal();
  const { mutate: quizAnswerMutation } = useMutation(postQuizAnswer);
  const [isDisabled, setIsDisabled] = useState(true);
  const [answer, setAnswer] = useState('');

  const {
    query: { quizId },
  } = useRouter();
  const quizIdParams = Number(quizId);

  //button disable 제어
  useEffect(() => {
    if (answer === '' || answer === '<p><br></p>') {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [answer]);

  const openModal = async () => {
    await open({
      children: <SubmitModal />,
    });
  };

  const onClick = () => {
    openModal();
    quizAnswerMutation({ answer, quizIdParams });
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
