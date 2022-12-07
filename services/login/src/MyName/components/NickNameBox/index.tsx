import { Button, emoji, Image, Input, Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';

import { Wrapper } from 'common/style';

export function NickNameBox() {
  return (
    <Wrapper>
      <Flex.Center direction="column">
        <Image src={emoji.studying} width={170} height={170} alt="toks-emoji" />
        <Spacing size={15} />
        <Text variant="title04">내 이름은 똑스야! 너의 이름은 뭐니?</Text>
        <Spacing size={53} />
      </Flex.Center>
      <form onSubmit={handleSubmit()}>
        <Input label="닉네임 입력" width={448} placeholder="닉네임을 입력하세요" />
        <Spacing size={36} />
        <Button type="primary" htmlType="submit" disabled={isDisable}>
          완료
        </Button>
      </form>
    </Wrapper>
  );
}
