import { Button, Image, Input, Text, emoji } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { patchNickname } from 'apis/getNickname';
import { useMutation } from 'react-query';

import { Wrapper } from 'common/style';
import { useCreateNicknameForm } from 'hooks/useCreateNicknameForm';
import { AxiosError } from 'axios';
import { IAxiosError } from 'interfaces/interfaces';

export function NickNameBox() {
  const { register, handleSubmit, errors, isDisabled, isMaxLength, isMinLength, isRequiredText, setError } =
    useCreateNicknameForm();

  const nicknameMutation = useMutation((nickname: string) => patchNickname(nickname), {
    onError: async (error: AxiosError) => {
      return error.response?.data;
    },
  });

  const onSubmit = handleSubmit(data => {
    nicknameMutation.mutate(data.nickName);

    //닉네임 중복처리
    if ((nicknameMutation.error?.response?.data as IAxiosError)?.code === -20011) {
      setError(
        'nickName',
        { message: '이미 존재하는 닉네임입니다.' }, // 에러 메세지
        { shouldFocus: true }
      );
    }
  });

  return (
    <Wrapper>
      <Flex.Center direction="column">
        <Image src={emoji.studying} width={170} height={170} alt="toks-emoji" />
        <Spacing size={10} />
        <Text variant="title04">내 이름은 똑스야! 너의 이름은 뭐니?</Text>
        <Spacing size={53} />
      </Flex.Center>
      <form onSubmit={onSubmit}>
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
