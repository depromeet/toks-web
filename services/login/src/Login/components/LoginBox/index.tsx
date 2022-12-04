import { Button, Image, Text } from '@depromeet/toks-components';
import { Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';

import { Wrapper } from '../../../common/style';

export function Auth() {
  const params = new URLSearchParams(location.search);
  const authToken = {
    access: sessionStorage.getItem('accessToken'),
    refresh: sessionStorage.getItem('refreshToken'),
  };
  if (!authToken?.access) {
    // let { accessToken, refreshToken } = URLSearchParams<{ accessToken: string; refreshToken: string }>();
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');
    console.log(accessToken);
    console.log(refreshToken);
    console.log(params);

    if (accessToken && refreshToken) {
      sessionStorage.setItem('accessToken', accessToken);
      sessionStorage.setItem('refreshToken', refreshToken);
    }
  }
}
export function LoginBox() {
  const router = useRouter();
  const onClick = () => {
    router.push('https://api.tokstudy.com/oauth2/authorize/kakao');

    setTimeout(() => {
      Auth();
      console.log('hihihi');
    }, 100);
  };

  return (
    <Wrapper>
      <Image src="https://asset.tokstudy.com/awake-yellow-emoji.png" width={100} height={100} alt="toks-emoji" />
      <Spacing size={32} />
      <Text variant="title04">개발자를 위한 스터디, 똑스-잇!</Text>
      <Spacing size={93} />
      <Button onClick={onClick}>Kakao 로그인</Button>
    </Wrapper>
  );
}
