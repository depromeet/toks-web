import { Button, Calendar, DropDown, TimePicker, Upload } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { sub } from 'date-fns';
import { Control, Controller, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { QUIZ_LIMIT_TIME } from 'quiz/pages/QuizCreatePage/constants';

import { QuizCreateForm } from '../../types';

interface QuizCreateInputListProps {
  register: UseFormRegister<QuizCreateForm>;
  setValue: UseFormSetValue<QuizCreateForm>;
  control: Control<QuizCreateForm, number>;
  endedAt: string;
  className?: string;
}

export const QuizCreateInputList = ({ register, setValue, control, endedAt, className }: QuizCreateInputListProps) => {
  return (
    <Flex
      direction="column"
      className={className}
      css={{
        width: '340px',
        gap: '24px',
      }}
    >
      <Controller
        name="durationOfSecond"
        control={control}
        render={({ field }) => <DropDown {...field} label="제한 시간" options={QUIZ_LIMIT_TIME} required />}
      />
      <Calendar
        label="똑스 공개 날짜"
        dateFormat="mm/dd/yy"
        minDate={new Date()}
        maxDate={sub(new Date(endedAt), { days: 1 })}
        {...register('startedAt')}
        required
      />
      <TimePicker
        label="똑스 공개 시간"
        setValue={setValue as unknown as UseFormSetValue<FieldValues>}
        {...register('timepicker')}
        required
      />
      <Upload
        onDropFiles={files => {
          setValue('imageFiles', files);
        }}
        height={140}
        labelText="추가하기"
        required
        multiple
      />
      <Spacing size={16} />
      <Flex
        css={{
          gap: '24px',
        }}
      >
        <Button htmlType="reset" type="ghost">
          다시 만들기
        </Button>
        <Button htmlType="submit">똑스 만들기 완료</Button>
      </Flex>
    </Flex>
  );
};
