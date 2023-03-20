import { Text, useModal } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';

export const useConfirmModal = () => {
  const { openModal, close } = useModal();
  const openConfirmModal = async (confirmCallback?: () => void) => {
    await openModal({
      children: (
        <Flex.Center direction="column">
          <Text variant="title03" as="h3" css={{ margin: 0 }}>
            작성 중인 퀴즈가 있어요.
          </Text>
          <Text variant="title03" as="h3" css={{ margin: 0 }}>
            다시 만드시겠어요?
          </Text>
          <Text variant="body01" as="span" css={{ marginTop: '8px' }}>
            다시 만들 경우, 지금까지 작성한 퀴즈 내용는 다시 복구할 수 없어요.
          </Text>
          <Spacing size={56} />
        </Flex.Center>
      ),
      type: 'confirm',
      buttonText: '다시 만들기',
      onConfirm: () => {
        confirmCallback?.();
        close();
      },
      onCancel: () => {
        close();
      },
    });
  };

  return { openConfirmModal, close };
};
