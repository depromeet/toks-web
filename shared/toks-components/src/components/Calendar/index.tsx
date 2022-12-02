import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Calendar as CalendarComponent, CalendarProps } from 'primereact/calendar';
import { useState } from 'react';

import { Text } from '../Text';

export interface CalendarComponentProps extends CalendarProps {
  errorMessage?: string;
  label: string;
}

export const Calendar = ({ label, name, errorMessage, ...props }: CalendarComponentProps) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Wrapper>
      <label htmlFor={name}>
        <Text variant="body02">{label}</Text>
      </label>
      <StyledCalendar isFocus={isFocus} isError={Boolean(errorMessage)}>
        <CalendarComponent
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          panelStyle={{
            backgroundColor: theme.colors.gray100,
            color: theme.colors.white,
          }}
          dateFormat="yy. mm. dd. D"
          {...props}
        />
      </StyledCalendar>
      {errorMessage && (
        <Text variant="body02" color="danger">
          {errorMessage}
        </Text>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 6px;
`;

const StyledCalendar = styled('div')<{ width?: number; height?: number; isFocus: boolean; isError: boolean }>`
  border-radius: 8px;
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

  & .p-calendar {
    display: block;
    height: 100%;
  }

  & .p-calendar .p-inputwrapper {
    display: inline-block;
  }

  & .p-inputwrapper-focus {
    border: none;
    outline: none;
    &:focus {
      border: none;
    }
  }

  & .p-calendar .p-inputtext {
    display: inline-block;
    padding: 0 14px;

    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;

    color: ${theme.colors.white};

    //styleName: body-02;
    font-family: Spoqa Han Sans Neo;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.6px;

    &:enabled:focus {
      border: none;
      box-shadow: none;
    }
  }

  & .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
    background-color: ${theme.colors.gray100} !important;
  }

  & .p-datepicker {
    background-color: ${theme.colors.gray100} !important;
  }

  & .p-datepicker table td.p-datepicker-today > span {
    background: ${theme.colors.primary} !important;
  }
`;
