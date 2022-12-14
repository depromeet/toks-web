import { Button, Calendar, DropDown, Input, InputChips, Text } from '@depromeet/toks-components';
import { Flex, gutter, margin, size } from '@toss/emotion-utils';
import { add } from 'date-fns';
import { Controller } from 'react-hook-form';

import { STUDY_CATEGORY_OPTIONS } from 'onboarding/pages/CreateStudy/constants';
import { useCreateStudyForm } from 'onboarding/pages/CreateStudy/hooks/useCreateStudyForm';

import { Wrapper } from './style';

export const CreateStudyForm = () => {
  const { register, control, createStudy, setValue, errors, isDisabled, isMaxLength, isRequiredText, getValues } =
    useCreateStudyForm();

  const { startedAt } = getValues();
  const startedAtToWeeks = add(new Date(startedAt), { days: 7 });

  return (
    <Wrapper>
      <Text as="h2" variant="title03" css={{ textAlign: 'center' }}>
        똑스터디 만들기
      </Text>
      <form
        onSubmit={e => {
          e.preventDefault();
          createStudy();
        }}
        css={(margin.top(42), size({ width: '100%' }), gutter('vertical', 32))}
      >
        <Input
          {...register('name', {
            required: isRequiredText('스터디 이름'),
            maxLength: isMaxLength(20),
          })}
          autoFocus
          required
          label="스터디 이름"
          placeholder="스터디 이름을 입력해주세요. (20자 이내)"
          errorMessage={errors.name?.message}
        />
        <Input
          label="스터디 설명"
          placeholder="스터디 목표나 간단한 소개를 작성해주세요. (50자 이내)"
          errorMessage={errors.description?.message}
          {...register('description', {
            maxLength: isMaxLength(50),
          })}
        />
        <Flex css={gutter('horizontal', 24)}>
          <Calendar
            {...register('startedAt', {
              required: isRequiredText('시작일'),
            })}
            readOnlyInput
            required
            label="스터디 시작일"
            minDate={new Date()}
            placeholder="날짜 선택"
          />
          <Calendar
            {...register('endedAt', {
              required: isRequiredText('종료일'),
              disabled: !startedAt,
            })}
            readOnlyInput
            required
            label="스터디 종료일"
            minDate={startedAtToWeeks}
            placeholder="날짜 선택"
          />
        </Flex>
        <Controller
          name="capacity"
          control={control}
          rules={{
            required: isRequiredText('스터디 인원'),
          }}
          render={({ field }) => <DropDown {...field} options={STUDY_CATEGORY_OPTIONS} label="스터디 인원" required />}
        />
        <Controller
          name="tags"
          control={control}
          render={({ field }) => (
            <InputChips {...field} onChange={e => setValue('tags', e.value)} label="스터디 관련 태그" />
          )}
        />
        <Button type="primary" htmlType="submit" disabled={isDisabled}>
          {isDisabled ? '필수 요소를 채워주세요' : '생성하기'}
        </Button>
      </form>
    </Wrapper>
  );
};
