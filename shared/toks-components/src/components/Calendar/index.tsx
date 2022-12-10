import { theme } from '@depromeet/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { addLocale, locale } from 'primereact/api';
import { Calendar as CalendarComponent, CalendarProps } from 'primereact/calendar';
import { forwardRef, useState } from 'react';

import { Text } from '../Text';

addLocale('ko', {
  accept: '예',
  reject: '아니오',
  choose: '선택',
  upload: '업로드',
  cancel: '취소',
  dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  today: '오늘',
  clear: '초기화',
  weekHeader: 'Wk',
  firstDayOfWeek: 0,
  dateFormat: 'mm/dd/yy',
  weak: '약함',
  medium: '보통',
  strong: '강함',
  passwordPrompt: '패스워드를 입력하세요',
});

locale('ko');

export interface CalendarComponentProps extends CalendarProps {
  errorMessage?: string;
  label: string;
}

export const Calendar = forwardRef<HTMLInputElement, CalendarComponentProps>(
  ({ label, name, errorMessage, inputRef, ...props }: CalendarComponentProps, ref) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <Wrapper>
        <label htmlFor={name}>
          <Text variant="body02">{label}</Text>
        </label>
        <StyledCalendar isFocus={isFocus} isError={Boolean(errorMessage)}>
          <CalendarComponent
            inputId={name}
            name={name}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            panelStyle={{
              backgroundColor: theme.colors.gray100,
              color: theme.colors.white,
            }}
            dateFormat="yy. mm. dd. D"
            inputRef={ref}
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
  }
);

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
