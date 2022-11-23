import { InputText } from 'primereact/inputtext';
import { ComponentProps } from 'react';
import styled from '@emotion/styled';
import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';

type InputTextProps = ComponentProps<typeof InputText>;

interface Props extends Omit<InputTextProps, 'type'> {
  type?: 'normal' | 'errored';
  width?: number;
  height?: number;
}

export function Input({ type = 'normal', width, height, ...props }: Props) {
  return <StyledInput width={width} height={height} {...props} placeholder="안녕하세요" />;
}

const StyledInput = styled(InputText)<InputTextProps>`
  border-radius: 8px;
  padding: 14px 16px;
  ${props => {
    const { width, height } = props;
    return css`
      width: ${width ? `${width}px` : '100vw'};
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
  }
`;
