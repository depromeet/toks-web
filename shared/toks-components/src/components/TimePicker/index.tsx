import { theme } from '@depromeet/theme';
import styled from '@emotion/styled';
import { Dispatch, HTMLAttributes, SetStateAction, forwardRef, useEffect, useState } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

import { Input, Text } from '@depromeet/toks-components';

type AMPM = 'AM' | 'PM';

interface TimePickerProps extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  defaultHour?: number;
  defaultMinute?: number;
  defaultAmpm?: AMPM;
  label: string;
  setValue?: UseFormSetValue<FieldValues>;
}

interface ToggleSwitchButtonProps extends HTMLAttributes<HTMLDivElement> {
  ampm: AMPM;
  setAmpm: Dispatch<SetStateAction<AMPM>>;
}

const padZero = (value: number | string = 0) => value.toString().padStart(2, '0');

function ToggleSwitchButton({ ampm, setAmpm }: ToggleSwitchButtonProps) {
  const getActiveColor = (isActive: boolean) => (isActive ? theme.colors.primary : theme.colors.gray090);
  const isAM = ampm === 'AM';

  return (
    <FlexRow style={{ paddingTop: '6px', borderRadius: '6px' }}>
      <LeftToggleButton
        type="button"
        style={{ backgroundColor: `${getActiveColor(isAM)}` }}
        onClick={() => setAmpm('AM')}
      >
        <Text variant="body02">AM</Text>
      </LeftToggleButton>
      <RightToggleButton
        type="button"
        style={{ backgroundColor: `${getActiveColor(!isAM)}` }}
        onClick={() => setAmpm('PM')}
      >
        <Text variant="body02">PM</Text>
      </RightToggleButton>
    </FlexRow>
  );
}

const convertTimeFormat = (hour: string, minute: string, ampm: AMPM) => {
  return ampm === 'AM'
    ? `${padZero(hour)}:${padZero(minute)}:00`
    : `${padZero(Number(hour) + 12 === 24 ? 0 : Number(hour) + 12)}:${padZero(minute)}:00`;
};

const useTimePicker = (defaultHour: number, defaultMinute: number, defaultAmpm: AMPM) => {
  const [hour, setHour] = useState(padZero(defaultHour));
  const [minute, setMinute] = useState(padZero(defaultMinute));
  const [hourError, setHourError] = useState<string>();
  const [minuteError, setMinuteError] = useState<string>();
  const [ampm, setAmpm] = useState(defaultAmpm);

  const onHourUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newHour } = e.target;
    if (Number(newHour) <= 12) {
      setHour(newHour);
      setHourError(undefined);
    } else {
      setHour('');
      setHourError('0-12사이의 숫자를 입력해주세요');
    }
  };

  const onMinuteUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newMinute } = e.target;
    if (Number(newMinute) < 60) {
      setMinute(newMinute);
      setMinuteError(undefined);
    } else {
      setMinute('');
      setMinuteError('0-59사이의 숫자를 입력해주세요');
    }
  };

  return {
    hour,
    minute,
    ampm,
    hourError,
    minuteError,
    onHourUpdate,
    onMinuteUpdate,
    setAmpm,
  };
};

export const TimePicker = forwardRef<HTMLInputElement, TimePickerProps>(
  (
    { defaultHour = 0, defaultMinute = 0, defaultAmpm = 'AM', label, required, setValue, ...register }: TimePickerProps,
    ref
  ) => {
    const { hour, minute, ampm, hourError, minuteError, onHourUpdate, onMinuteUpdate, setAmpm } = useTimePicker(
      defaultHour,
      defaultMinute,
      defaultAmpm
    );

    useEffect(() => {
      setValue && setValue('timepicker', convertTimeFormat(hour, minute, ampm));
    }, [hour, minute, ampm, setValue]);

    return (
      <div>
        <Text variant="headline">
          {label}
          {required && '*'}
        </Text>
        <FlexRow>
          <input
            type="hidden"
            {...register}
            name="timepicker"
            ref={ref}
            value={convertTimeFormat(hour, minute, ampm)}
          />
          <FlexRow
            style={{
              marginRight: '20px',
            }}
          >
            <Input
              label=""
              name="hour"
              placeholder={padZero(defaultHour)}
              autoComplete="off"
              maxLength={2}
              onChange={onHourUpdate}
              value={hourError && ''}
              errorMessage={hourError}
            />
            <Text variant="body01" style={{ margin: '0 6px' }}>
              :
            </Text>
            <Input
              label=""
              name="minute"
              placeholder={padZero(defaultMinute)}
              autoComplete="off"
              maxLength={2}
              onChange={onMinuteUpdate}
              value={minuteError && ''}
              errorMessage={minuteError}
            />
          </FlexRow>
          <ToggleSwitchButton ampm={ampm} setAmpm={setAmpm} />
        </FlexRow>
      </div>
    );
  }
);

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftToggleButton = styled.button`
  padding: 13px;
  border: 0px;
  border-radius: 6px 0 0 6px;

  cursor: pointer;
`;

export const RightToggleButton = styled.button`
  padding: 13px;
  border: 0px;
  border-radius: 0 6px 6px 0;

  cursor: pointer;
`;
