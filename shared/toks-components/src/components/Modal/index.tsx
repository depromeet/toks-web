import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Button } from '../Button';
export interface ModalProps {
  children: ReactNode;
  type?: 'alert' | 'confirm';
  buttonText?: string;
  onConfirm?: VoidFunction;
  onCancel?: VoidFunction;
}

export function Modal({ children, type = 'alert', buttonText = '확인하기', onCancel, onConfirm }: ModalProps) {
  return (
    <StyledModal>
      {children}
      {type === 'alert' && (
        <Button
          onClick={e => {
            e.stopPropagation();
            onConfirm?.();
          }}
        >
          {buttonText}
        </Button>
      )}
      {type === 'confirm' && (
        <FlexRow>
          <Button
            type="ghost"
            onClick={e => {
              e.stopPropagation();
              onCancel?.();
            }}
          >
            취소
          </Button>
          <Button
            type="danger"
            onClick={e => {
              e.stopPropagation();
              onConfirm?.();
            }}
          >
            {buttonText}
          </Button>
        </FlexRow>
      )}
    </StyledModal>
  );
}

const StyledModal = styled.div`
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

const FlexRow = styled.div`
  display: flex;
  gap: 16px;
`;
