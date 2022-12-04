import { Button, Calendar, InputChips, Input, Text } from '@depromeet/toks-components';
import { Flex, gutter, margin, size } from '@toss/emotion-utils';
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { Wrapper } from './style';

export const CreateStudyForm = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [value, setValue] = useState<string[]>([]);

  return (
    <Wrapper>
      <Text as="h2" variant="title03" css={{ textAlign: 'center' }}>
        똑스터디 만들기
      </Text>
      <form
        onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
        css={(margin.top(42), size({ width: '100%' }), gutter('vertical', 32))}
      >
        <Input
          label="스터디 이름*"
          placeholder="스터디 이름을 입력해주세요. (20자 이내)"
          autoFocus
          {...register('studyName', { required: true })}
        />
        <Input
          label="스터디 설명"
          placeholder="스터디 목표나 간단한 소개를 작성해주세요. (50자 이내)"
          errorMessage="스터디 설명을 입력해주세요."
          {...register('studyDescription')}
        />
        <Flex css={gutter('horizontal', 24)}>
          <Calendar
            readOnlyInput
            label="스터디 시작일*"
            minDate={new Date()}
            placeholder="날짜 선택"
            {...register('startDate', { required: true })}
          />
          <Calendar
            readOnlyInput
            label="스터디 종료일*"
            minDate={new Date()}
            placeholder="날짜 선택"
            {...register('endDate', { required: true })}
          />
        </Flex>
        <Input label="스터디 인원*" {...register('memberCount', { required: true })} />
        <InputChips
          value={getValues('tags')}
          name="studyTags"
          onChange={e => setValue(e.value)}
          label="스터디 관련 태그"
        />
        <Button type="primary" htmlType="submit">
          생성하기
        </Button>
      </form>
    </Wrapper>
  );
};
