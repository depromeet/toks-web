import { getOriginUrl, isToksError } from '@depromeet/http';
import { PATHS } from '@depromeet/path';
import { Button, Image, Input, Text, emoji, useToast } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';

import { useSetNickname } from 'login/hooks/query/useSetNickname';
import { useCreateNicknameForm } from 'login/hooks/useCreateNicknameForm';
import { Wrapper } from 'login/pages/MyName/components/style';

export function NickNameBox() {
  const { register, handleSubmit, errors, isDisabled, isMaxLength, isMinLength, isRequiredText, setError } =
    useCreateNicknameForm();

  const { mutateAsync: nicknameMutation } = useSetNickname();
  const { open } = useToast();
  const router = useRouter();

  const onSubmit = handleSubmit(async data => {
    try {
      await nicknameMutation(data.nickName);

      const originUrl = getOriginUrl();

      if (originUrl != null) {
        await router.replace(originUrl.path);
      } else {
        await router.replace(PATHS.home.myStudy);
      }

      await open({ title: '닉네임 생성을 완료했어요', type: 'success' });
    } catch (error: unknown) {
      if (isToksError(error) && error.code === '-20011') {
        setError('nickName', {
          message: '이미 존재하는 닉네임입니다.', // 에러 메세지
        });
      }
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
