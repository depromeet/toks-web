import { Button, Calendar, DropDown, Input, InputChips, Text } from '@depromeet/toks-components';
import { Flex, gutter, margin, size } from '@toss/emotion-utils';
import { Controller } from 'react-hook-form';

import { useCreateStudyForm } from 'pages/CreateStudy/hooks/useCreateStudyForm';

import { Wrapper } from './style';
import { STUDY_CATEGORY_OPTIONS } from 'pages/CreateStudy/constants';

export const CreateStudyForm = () => {
  const { register, control, handleSubmit, setValue, errors, isDisabled, isMaxLength, isRequiredText } =
    useCreateStudyForm();

  return (
    <Wrapper>
      <Text as="h2" variant="title03" css={{ textAlign: 'center' }}>
        똑스터디 만들기
      </Text>
      <form
        onSubmit={handleSubmit(data => alert(JSON.stringify(data, null, 2)))}
        css={(margin.top(42), size({ width: '100%' }), gutter('vertical', 32))}
      >
        <Input
          {...register('studyName', {
            required: isRequiredText('스터디 이름'),
            maxLength: isMaxLength(20),
          })}
          autoFocus
          required
          label="스터디 이름"
          placeholder="스터디 이름을 입력해주세요. (20자 이내)"
          errorMessage={errors.studyName?.message}
        />
        <Input
          {...register('studyDescription', {
            maxLength: isMaxLength(50),
          })}
          label="스터디 설명"
          placeholder="스터디 목표나 간단한 소개를 작성해주세요. (50자 이내)"
          errorMessage={errors.studyDescription?.message}
        />
        <Flex css={gutter('horizontal', 24)}>
          <Calendar
            {...register('startDate', {
              required: isRequiredText('시작일'),
            })}
            readOnlyInput
            required
            label="스터디 시작일"
            minDate={new Date()}
            placeholder="날짜 선택"
            errorMessage={errors.startDate?.message}
          />
          <Calendar
            {...register('endDate', {
              required: isRequiredText('종료일'),
            })}
            readOnlyInput
            required
            label="스터디 종료일"
            minDate={new Date()}
            placeholder="날짜 선택"
            errorMessage={errors.endDate?.message}
          />
        </Flex>
        <Controller
          name="studyCategory"
          control={control}
          render={({ field }) => <DropDown {...field} options={STUDY_CATEGORY_OPTIONS} label="스터디 인원" required />}
        />
        <Controller
          name="studyTags"
          control={control}
          render={({ field }) => (
            <InputChips {...field} onChange={e => setValue('studyTags', e.value)} label="스터디 관련 태그" max={5} />
          )}
        />
        <Button type="primary" htmlType="submit" disabled={isDisabled}>
          {isDisabled ? '필수 요소를 채워주세요' : '생성하기'}
        </Button>
      </form>
    </Wrapper>
  );
};
