import { Text } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';

import { LoginBox } from 'Login/components/LoginBox';

function Login() {
  return (
    <Flex.Center direction="column">
      <Text variant="title02" css={{ marginTop: '180px' }}>
        똑스 시작하기
      </Text>
      <Spacing size={60} />
      <LoginBox />
    </Flex.Center>
  );
}

export default Login;
