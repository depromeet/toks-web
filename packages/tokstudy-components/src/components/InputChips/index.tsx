import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Chips as ChipsComponent, ChipsProps } from 'primereact/chips';
import { forwardRef, useEffect, useRef, useState } from 'react';

import { InitialInputFocusStyle, InitialInputHoverStyle } from '../Input';
import { Text } from '../Text';

interface ChipsComponentProps extends ChipsProps {
  label?: string;
  name?: string;
  errorMessage?: string;
}

export const InputChips = forwardRef<HTMLInputElement, ChipsComponentProps>(
  ({ label, name, errorMessage, value, onFocus, onBlur, ...props }: ChipsComponentProps, ref) => {
    const inputBoxRef = useRef<HTMLDivElement>(null);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
      // chip icon 변경
      if (inputBoxRef.current) {
        const nonChangeIconChips = inputBoxRef.current?.querySelectorAll('.pi-times-circle');
        nonChangeIconChips.forEach(chip => {
          chip.classList.replace('pi-times-circle', 'pi-times');
        });
      }
    }, [value]);

    return (
      <Wrapper>
        <label htmlFor={name}>
          <Text variant="body02">{label}</Text>
        </label>
        <StyledChip ref={inputBoxRef} isFocus={isFocus}>
          <ChipsComponent
            inputId={name}
            inputRef={ref}
            name={name}
            value={value}
            {...props}
            onFocus={e => {
              onFocus?.(e);
              setIsFocus(true);
            }}
            onBlur={e => {
              onBlur?.(e);
              setIsFocus(false);
            }}
            autoComplete="off"
          />
        </StyledChip>
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
  & .p-chips {
    display: block;
  }
`;

export const StyledChip = styled('div')<{ isFocus?: boolean }>`
  .p-inputtext {
    border: none;
    box-shadow: none !important;

    ${props => {
      const { isFocus } = props;
      return css`
        ${isFocus ? InitialInputFocusStyle : InitialInputHoverStyle}
      `;
    }}
  }

  & .p-chips .p-chips-multiple-container {
    padding: 0 16px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    flex-wrap: nowrap;
    background-color: ${theme.colors.gray100};
    overflow: auto;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }

  & .p-chips .p-chips-multiple-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  & .p-chips .p-chips-multiple-container .p-chips-token {
    padding: 4px 12px;
    border-radius: 8px;
    background-color: ${theme.colors.gray080};
    color: ${theme.colors.white};
  }

  & .p-chips .p-chips-multiple-container .p-chips-input-token input,
  & .p-chips-token-label {
    color: ${theme.colors.white};
    //styleName: body-02;
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.6px;
    text-align: left;
  }

  & .p-chips .p-chips-multiple-container .p-chips-input-token input {
    /* NOTE: 입력 데이터 보이도록 설정 */
    width: auto;
  }
`;
