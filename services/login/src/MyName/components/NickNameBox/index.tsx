import { Button, Image, Input } from '@depromeet/toks-components';
import { Spacing } from '@toss/emotion-utils';
import { Wrapper } from 'common/style';
import { Text } from '@depromeet/toks-components';

export function NickNameBox() {
  return (
    <Wrapper>
      <Image src="https://asset.tokstudy.com/awake-yellow-emoji.png" width={100} height={100} alt="toks-emoji" />
      <Spacing size={32} />
      <Text variant="title04">내 이름은 똑스야! 너의 이름은 뭐니?</Text>
      <Spacing size={53} />
      <Input label="닉네임 입력" width={448} placeholder="닉네임을 입력하세요" />
      <Spacing size={36} />
      <Button>완료</Button>
    </Wrapper>
  );
}
