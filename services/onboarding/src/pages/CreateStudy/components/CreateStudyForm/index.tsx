import { Button, Calendar, Input, Text } from '@depromeet/toks-components';
import { Flex, gutter, margin, size } from '@toss/emotion-utils';

import { Wrapper } from './style';

export const CreateStudyForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Text as="h2" variant="title03" css={{ textAlign: 'center' }}>
        똑스터디 만들기
      </Text>
      <form onSubmit={handleSubmit} css={(margin.top(42), size({ width: '100%' }), gutter('vertical', 32))}>
        <Input label="스터디 이름*" name="studyName" placeholder="스터디 이름을 입력해주세요. (20자 이내)" autoFocus />
        <Input
          label="스터디 설명"
          name="studyDescription"
          placeholder="스터디 목표나 간단한 소개를 작성해주세요. (50자 이내)"
        />
        <Flex css={gutter('horizontal', 24)}>
          <Calendar readOnlyInput label="스터디 시작일*" minDate={new Date()} placeholder="날짜 선택" />
          <Calendar readOnlyInput label="스터디 종료일*" minDate={new Date()} placeholder="날짜 선택" />
        </Flex>
        <Input label="스터디 인원*" name="memberCount" />
        <Input label="스터디 관련 태그" name="category" />
        <Button type="primary" htmlType="submit" buttonStyle={{ width: '100%' }}>
          생성하기
        </Button>
      </form>
    </Wrapper>
  );
};
