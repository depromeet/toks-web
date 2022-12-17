import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { useCloaseModal } from '../../hooks';

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: Props) {
  const outSide = useCloaseModal(() => {
    onClose();
  }, []);
  return (
    <ModalWrapper ref={outSide}>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1010;
`;

const ModalContainer = styled.div`
  position: relative;
  vertical-align: auto;
  padding: 28px;
  width: 600px;
  background-color: ${theme.colors.gray110};
  border: 1px solid ${theme.colors.gray100};
  border-radius: 16px;
  z-index: 1011;
  margin: auto;
`;
