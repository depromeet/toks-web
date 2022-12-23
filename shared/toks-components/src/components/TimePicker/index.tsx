import { useEffect } from 'react';
import styled from '@emotion/styled';
import { Input, Text } from '@depromeet/toks-components';

interface TimePickerProps {
  hour : number,
  minute : number,
  isAM : boolean,
}

const padZero = (value: string | number = 0) => value.toString().padStart(2, '0');

export function TimePicker({hour = 0, minute = 0, isAM = true} : TimePickerProps) {

  return (
    <FlexRow>
        <Input label='' placeholder={padZero(hour)}/>
        <Text variant='body01'>:</Text>
        <Input label='' placeholder={padZero(minute)}/>
    </FlexRow>
  );
}

export const FlexRow = styled.div`
  display: flex;
`;