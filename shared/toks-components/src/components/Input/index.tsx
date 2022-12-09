import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, useState } from 'react';

import { Image } from '../Image';
import { Text } from '../Text';

interface Props extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  name?: string;
  width?: number;
  height?: number;
  label?: string;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label = 'user', name, errorMessage, width, height, required, ...props }: Props, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    console.log(required);
    return (
      <Wrapper>
        <label htmlFor={name}>
          <Text variant="body02">
            {label}
            {required && '*'}
          </Text>
        </label>
        <StyledInput width={width} height={height} isFocus={isFocus} isError={Boolean(errorMessage)} {...props}>
          <InitialInput
            ref={ref}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            id={name}
            name={name}
            required={required}
            {...props}
          />
          {errorMessage && (
            <Image src="https://toks-web-assets.s3.amazonaws.com/ic-danger.svg" alt="경고" width={22} height={22} />
          )}
        </StyledInput>
        {errorMessage && (
          <Text variant="body02" color="danger">
            {errorMessage}
          </Text>
        )}
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
`;

const StyledInput = styled('div')<{ width?: number; height?: number; isFocus: boolean; isError: boolean }>`
  border-radius: 8px;
  display: flex;
  align-items: center;
  ${props => {
    const { width, height, isFocus, isError } = props;

    const errorStyle =
      isError &&
      css`
        border: 1px solid ${theme.colors.danger};
      `;

    const focusStyle =
      isFocus &&
      css`
        border: #ff862f 2px solid;
        background: ${theme.colors.gray100};
        outline: none;
        box-shadow: none;
        color: ${theme.colors.white};
      `;

    return css`
      width: ${width ? `${width}px` : '100%'};
      height: ${height ? `${height}px` : '48px'};
      ${focusStyle}
      ${errorStyle}
    `;
  }}
  background: ${theme.colors.gray100};
  padding: 0 14px;
  &:hover {
    background: ${theme.colors.gray100};
    border: ${theme.colors.gray040} 1px solid;
  }
`;

const InitialInput = styled('input')`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;

  color: ${theme.colors.white};

  ::placeholder {
    color: ${theme.colors.gray070};
  }

  &:disabled {
    border: none;
    background: ${theme.colors.gray110};
    ::placeholder {
      color: ${theme.colors.gray080};
    }
  }

  //styleName: body-02;
  font-family: Spoqa Han Sans Neo;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.6px;

  box-sizing: border-box;
  outline: none;
  border-radius: 8px;
`;
