import { Button, Image, Input, Text, emoji } from '@depromeet/toks-components';

import { Flex, Spacing } from '@toss/emotion-utils';
import { Wrapper } from 'common/style';
import { useCreateNicknameForm } from 'hooks/useCreateNicknameForm';

export function NickNameBox() {
  const { register, handleSubmit, errors, isDisabled, isMaxLength, isMinLength, isRequiredText } =
    useCreateNicknameForm();
  return (
    <Wrapper>
      <Flex.Center direction="column">
        <Image src={emoji.studying} width={170} height={170} alt="toks-emoji" />
        <Spacing size={10} />
        <Text variant="title04">내 이름은 똑스야! 너의 이름은 뭐니?</Text>
        <Spacing size={53} />
      </Flex.Center>
      <form onSubmit={handleSubmit(data => alert(data))}>
        <Input
          {...register('nickName', {
            required: isRequiredText(),
            minLength: isMinLength(2),
            maxLength: isMaxLength(10),
          })}
          label="닉네임 입력"
          errorMessage={errors.nickName?.message}
        />
        <Spacing size={30} />
        <Button type="primary" htmlType="submit" disabled={isDisabled}>
          완료
        </Button>
      </form>
    </Wrapper>
  );
}
