import { Button, Calendar, DropDown, TimePicker, Upload } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { Control, Controller, FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

import { QUIZ_LIMIT_TIME } from 'pages/QuizCreatePage/constants';

interface QuizCreateInputListProps {
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues, number>;
}

export const QuizCreateInputList = ({ register, setValue, control }: QuizCreateInputListProps) => {
  return (
    <Flex
      direction="column"
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
      <Calendar label="똑스 공개 날짜" dateFormat="mm/dd/yy" minDate={new Date()} {...register('startedAt')} required />
      <TimePicker label="똑스 공개 시간" setValue={setValue} {...register('timepicker')} required />
      <Upload
        onDropFiles={files => {
          setValue('imageFiles', files);
        }}
        height={160}
        labelText="추가하기"
        required
        multiple
      />
      <Flex
        css={{
          gap: '24px',
        }}
      >
        <Button htmlType="button" type="ghost">
          다시 만들기
        </Button>
        <Button htmlType="submit">똑스 만들기 완료</Button>
      </Flex>
    </Flex>
  );
};
