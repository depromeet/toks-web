import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';

import { InputText } from 'primereact/inputtext';

import { ComponentProps } from 'react';

import styled from '@emotion/styled';

import { Text } from '../Text';

type InputTextProps = ComponentProps<typeof InputText>;

interface Props extends Omit<InputTextProps, 'type'> {
  type?: 'normal' | 'errored';
  width?: number;
  height?: number;
  label?: string;
  errorMessage?: string;
}

export function Input({ type = 'normal', label = 'user', errorMessage = 'error', width, height, ...props }: Props) {
  return (
    <InputWrapper>
      <Text size={14} weight={400} className="label">
        {label}
      </Text>
      <StyledInput width={width} height={height} {...props} />
      <Text size={14} weight={400}>
        {errorMessage}
      </Text>
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled(InputText)<Props>`
  border-radius: 8px;
  ${props => {
    const { width, height } = props;
    return css`
      width: ${width ? `${width}px` : '280px'};
      height: ${height ? `${height}px` : '48px'};
    `;
  }}
  border: none !important;
  background: ${theme.colors.gray100} !important;
  ::placeholder {
    color: ${theme.colors.gray070};
  }
  &:hover {
    background: ${theme.colors.gray100} !important;
    border: ${theme.colors.gray040} 1px solid !important;
  }

  &:focus {
    border: #ff862f 2px solid !important;
    background: ${theme.colors.gray100} !important;
    outline: none !important;
    box-shadow: none !important;
    color: ${theme.colors.white};
  }
  &:disabled {
    border: none !important;
    background: ${theme.colors.gray110} !important;
    ::placeholder {
      color: ${theme.colors.gray080};
    }
  }
  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.gray110} !important;
    border: none !important;
  }
  &:invalid {
    border: #eb4852 1px solid !important;
    color: ${theme.colors.white};
    outline: none !important;
  }
  .p-error-block {
    color: #eb4852;
  }
`;
