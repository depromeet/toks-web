import { HTMLAttributes, useState, Dispatch, SetStateAction } from 'react';
import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Input, Text } from '@depromeet/toks-components';

type AMPM = "AM" | "PM";

interface TimePickerProps extends HTMLAttributes<HTMLDivElement> {
  defaultHour? : number,
  defaultMinute? : number,
  defaultAmpm? : AMPM
}

interface ToggleSwitchButtonProps extends HTMLAttributes<HTMLDivElement> {
  ampm : AMPM,
  setAmpm: Dispatch<SetStateAction<AMPM>>;
}

const padZero = (value: number | string = 0) => value.toString().padStart(2, '0');

function ToggleSwitchButton({ ampm, setAmpm } : ToggleSwitchButtonProps) {
  const getActiveColor = (isActive : boolean) => isActive? theme.colors.primary : theme.colors.gray090;
  const isAM = ampm === "AM";

  return (
    <FlexRow style={{paddingTop: '6px', borderRadius: '6px'}}>
      <LeftToggleButton 
        style={{ backgroundColor: `${getActiveColor(isAM)}` }}
        onClick={() => setAmpm("AM")}>
        <Text variant="body02">AM</Text>
      </LeftToggleButton>
      <RightToggleButton 
        style={{ backgroundColor: `${getActiveColor(!isAM)}` }}
        onClick={() => setAmpm("PM")}>
        <Text variant="body02">PM</Text>
      </RightToggleButton>
    </FlexRow>
  )
}

const convertTimeFormat = (hour : string, minute : string, ampm : AMPM) => {
  return (ampm === "AM")? 
    `${padZero(hour)}:${padZero(minute)}:00` :
    `${padZero(Number(hour) + 12)}:${padZero(minute)}:00`
}

const useTimePicker = (defaultHour : number, defaultMinute : number, defaultAmpm : AMPM) => {
  const [timePick, setTimePick] = useState({
    hour : padZero(defaultHour),
    minute : padZero(defaultMinute)
  });
  const { hour, minute } = timePick;
  const [ampm, setAmpm] = useState(defaultAmpm);

  const onUpdate = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setTimePick({
      ...timePick, 
      [name]: value
    });
  };

  return {
    hour,
    minute,
    ampm,
    onUpdate,
    setAmpm
  }
}

export function TimePicker({defaultHour = 0, defaultMinute = 0, defaultAmpm = "AM"} : TimePickerProps) {
  const {
    hour,
    minute,
    ampm,
    onUpdate,
    setAmpm
  } = useTimePicker(defaultHour, defaultMinute, defaultAmpm);

  return (
    <FlexRow>
      <input 
        type="hidden"
        value={convertTimeFormat(hour, minute, ampm)}/>
      <FlexRow style={{marginRight: '20px'}}>
        <Input 
          label='' 
          name='hour'
          placeholder={padZero(defaultHour)}
          autoComplete="off"
          onChange={onUpdate}/>
        <Text variant="body01" style={{margin: '0 6px'}}>:</Text>
        <Input 
          label='' 
          name='minute'
          placeholder={padZero(defaultMinute)}
          autoComplete="off"
          onChange={onUpdate}/>
      </FlexRow>
      <ToggleSwitchButton ampm={ampm} setAmpm={setAmpm}/>
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