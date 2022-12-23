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
      <LeftToggleButton style={{
        backgroundColor: `${getActiveColor(isAM)}`}}>
        <Text variant="body02">AM</Text>
      </LeftToggleButton>
      <RightToggleButton style={{
        backgroundColor: `${getActiveColor(!isAM)}`}}>
        <Text variant="body02">PM</Text>
      </RightToggleButton>
    </FlexRow>
  )
}

export function TimePicker({hour = 0, minute = 0, isAM = true} : TimePickerProps) {
  return (
    <FlexRow>
      <FlexRow style={{marginRight: '20px'}}>
        <Input label='' placeholder={padZero(hour)}/>
        <Text variant="body01" style={{margin: '0 6px'}}>:</Text>
        <Input label='' placeholder={padZero(minute)}/>
      </FlexRow>
      <ToggleSwitchButton isAM={isAM}/>
    </FlexRow>
  );
}

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftToggleButton = styled.button`
  padding: 13px;
  border: 0px;
  border-radius: 6px 0 0 6px;
`

export const RightToggleButton = styled.button`
  padding: 13px;
  border: 0px;
  border-radius: 0 6px 6px 0;
`