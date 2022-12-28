import { Button, Editor, useModal, Text } from '@depromeet/toks-components';
import { Spacing } from '@toss/emotion-utils';
import { SubmitModal } from '../ModalContents/SubmitModal';
import { Container, Wrapper } from './style';

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
  return (
    <Wrapper>
      <Container>
        <Editor />
      </Container>
      <Spacing size={20} />
      <Button onClick={onClick} css={{ float: 'right' }} width={140}>
        제출하기
      </Button>
    </Wrapper>
  );
}
