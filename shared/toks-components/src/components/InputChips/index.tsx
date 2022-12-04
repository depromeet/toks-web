import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Chips as ChipsComponent, ChipsProps } from 'primereact/chips';
import { useEffect, useRef } from 'react';
import { Text } from '../Text';

interface ChipsComponentProps extends ChipsProps {
  label?: string;
  name?: string;
  errorMessage?: string;
}

export const InputChips = ({ label, name, value, errorMessage, ...props }: ChipsComponentProps) => {
  const inputBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // chip icon 변경
    if (inputBoxRef.current) {
      const chips = inputBoxRef.current?.querySelectorAll('.pi-times-circle');
      chips.forEach(chip => {
        chip.classList.replace('pi-times-circle', 'pi-times');
      });
    }
  }, [value]);

  return (
    <Wrapper>
      <label htmlFor={name}>
        <Text variant="body02">{label}</Text>
      </label>
      <StyledChip ref={inputBoxRef}>
        <ChipsComponent value={value} inputId={name} name={name} {...props} />
      </StyledChip>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
  & .p-chips {
    display: block;
  }
`;

export const StyledChip = styled('div')`
  & .p-chips .p-chips-multiple-container {
    padding: 0 16px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    flex-wrap: nowrap;
    background-color: ${theme.colors.gray100};
    overflow: auto;
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
