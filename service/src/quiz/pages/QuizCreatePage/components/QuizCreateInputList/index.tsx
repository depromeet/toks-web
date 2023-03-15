import { Button, Calendar, DropDown, Text, TimePicker, Upload, useModal } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { sub } from 'date-fns';
import { ComponentProps, useRef } from 'react';
import { Control, FieldValues, UseFormRegister, UseFormReset, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { QUIZ_LIMIT_TIME } from 'quiz/pages/QuizCreatePage/constants';

import { QuizCreateForm } from '../../types';

interface QuizCreateInputListProps {
  register: UseFormRegister<QuizCreateForm>;
  setValue: UseFormSetValue<QuizCreateForm>;
  isLoading: boolean;
  watch: UseFormWatch<QuizCreateForm>;
  control: Control<QuizCreateForm, number>;
  endedAt: string;
  className?: string;
  reset: UseFormReset<QuizCreateForm>;
}

export const QuizCreateInputList = ({
  register,
  setValue,
  watch,
  endedAt,
  className,
  reset,
  isLoading,
}: QuizCreateInputListProps) => {
  const uploadRef: ComponentProps<typeof Upload>['ref'] | null = useRef(null);

  const { openModal, close } = useModal();
  const openConfirmModal = async () => {
    await openModal({
      children: (
        <Flex.Center direction="column">
          <Text variant="title03" as="h3" css={{ margin: 0 }}>
            작성 중인 퀴즈가 있어요.
          </Text>
          <Text variant="title03" as="h3" css={{ margin: 0 }}>
            다시 만드시겠어요?
          </Text>
          <Text variant="body01" as="span" css={{ marginTop: '8px' }}>
            다시 만들 경우, 지금까지 작성한 퀴즈 내용는 다시 복구할 수 없어요.
          </Text>
          <Spacing size={56} />
        </Flex.Center>
      ),
      type: 'confirm',
      onConfirm: () => {
        uploadRef.current?.reset();
        reset();
        close();
      },
      onCancel: () => {
        close();
      },
    });
  };
  return (
    <Flex
      direction="column"
      className={className}
      css={{
        width: '340px',
        gap: '24px',
      }}
    >
      <DropDown {...register('durationOfSecond')} label="제한 시간" options={QUIZ_LIMIT_TIME} required />
      <Calendar
        label="똑스 공개 날짜"
        dateFormat="mm/dd/yy"
        minDate={new Date()}
        maxDate={sub(new Date(endedAt), { days: 1 })}
        {...register('startedAt')}
        required
        readOnlyInput
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
        ref={uploadRef}
        maxCount={3}
      />
      <Spacing size={16} />
      <Flex
        css={{
          gap: '24px',
        }}
      >
        <Button
          htmlType="reset"
          type="ghost"
          onClick={() => {
            openConfirmModal();
          }}
        >
          다시 만들기
        </Button>
        <Button htmlType="submit" disabled={!isValidForm(watch()) || isLoading}>
          똑스 만들기 완료
        </Button>
      </Flex>
    </Flex>
  );
};

const REQUIRED_FIELD: Array<Partial<keyof QuizCreateForm>> = [
  'question',
  'durationOfSecond',
  'timepicker',
  'startedAt',
  'answer',
];

const isValidForm = (values: QuizCreateForm) => {
  return REQUIRED_FIELD.every(field => {
    return values[field] != null && values[field] !== '' && values[field] !== 0;
  });
};
