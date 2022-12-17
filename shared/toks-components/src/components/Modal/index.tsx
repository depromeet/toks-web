import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import React, { Dispatch, ReactNode, SetStateAction } from 'react';

interface Props {
  children: ReactNode;
  setIsModalOpened: Dispatch<SetStateAction<boolean>>;
}
export function Modal({ children, setIsModalOpened }: Props) {
  const onClickOutsideModal = () => {
    setIsModalOpened(false);
  };
  const onClickInsideModal = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <ModalWrapper onClick={onClickOutsideModal}>
      <ModalContainer onClick={onClickInsideModal}>{children}</ModalContainer>
    </ModalWrapper>
  );
}

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1010;
`;

const ModalContainer = styled.div`
  position: relative;
  top: 330px;
  padding: 28px;
  width: 600px;
  background-color: ${theme.colors.gray110};
  border: 1px solid ${theme.colors.gray100};
  border-radius: 16px;
  z-index: 1011;
  margin: auto;
`;
