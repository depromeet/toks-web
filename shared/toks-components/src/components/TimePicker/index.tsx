import { HTMLAttributes } from 'react';
import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Input, Text } from '@depromeet/toks-components';

interface TimePickerProps extends HTMLAttributes<HTMLDivElement> {
  hour? : number,
  minute? : number,
  isAM? : boolean,
}

interface ToggleSwitchButtonProps extends HTMLAttributes<HTMLDivElement> {
  isAM : boolean,
}

const padZero = (value: string | number = 0) => value.toString().padStart(2, '0');

function ToggleSwitchButton({ isAM } : ToggleSwitchButtonProps) {
  const getActiveColor = (isActive : boolean) => isActive? theme.colors.primary : theme.colors.gray090;
  return (
    <FlexRow style={{paddingTop: '6px', borderRadius: '6px'}}>
      <button style={{
        display: 'block',
        padding: '13px',
        border: '0px',
        backgroundColor: `${getActiveColor(isAM)}`,
        borderRadius: '6px 0 0 6px'
        }}>
        <Text variant="body02">AM</Text>
      </button>
      <button style={{
        padding: '13px',
        border: '0px',
        backgroundColor: `${getActiveColor(!isAM)}`,
        borderRadius: '0 6px 6px 0'}}>
        <Text variant="body02">PM</Text>
      </button>
    </FlexRow>
  )
}

export function TimePicker({hour = 0, minute = 0, isAM = true} : TimePickerProps) {
  return (
    <FlexRow>
        <Input label='' placeholder={padZero(hour)}/>
        <Text variant="body01" style={{margin: '0 6px'}}>:</Text>
        <Input label='' placeholder={padZero(minute)}/>
        <RowSpace style={{width: '20px'}}/>
        <ToggleSwitchButton isAM={isAM}/>
    </FlexRow>
  );
}

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const RowSpace = styled.div`
`