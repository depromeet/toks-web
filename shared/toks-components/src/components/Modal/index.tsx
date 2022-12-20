import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Modal({ children }: Props) {
  return <ModalContainer>{children}</ModalContainer>;
}

const ModalContainer = styled.div`
  position: relative;
  vertical-align: auto;
  text-align: center;
  padding: 28px;
  width: 600px;
  background-color: ${theme.colors.gray110};
  border: 1px solid ${theme.colors.gray100};
  border-radius: 16px;
  z-index: 1011;
  margin: auto;
`;
