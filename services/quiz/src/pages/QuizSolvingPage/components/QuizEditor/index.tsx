import { Button, useModal } from '@depromeet/toks-components';
import { Spacing } from '@toss/emotion-utils';
import { SubmitModal } from '../ModalContents/SubmitModal';
import { Container, Wrapper } from './style';
import dynamic from 'next/dynamic';

const Editor = dynamic(() => import('@depromeet/toks-components/src/components/Editor/Editor'), { ssr: false });

export function QuizEditor() {
  const { open } = useModal();
  const openModal = async () => {
    await open({
      children: <SubmitModal />,
    });
  };

  const onClick = () => {
    openModal();
  };

  const onChange = () => {};
  return (
    <Wrapper>
      <Container>
        <Editor onChange={onChange} />
      </Container>
      <Spacing size={20} />
      <Button onClick={onClick} css={{ float: 'right' }} width={140}>
        제출하기
      </Button>
    </Wrapper>
  );
}
