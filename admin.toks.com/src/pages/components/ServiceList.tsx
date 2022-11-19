import { Flex, width100 } from '@toss/emotion-utils';
import { ServiceName } from 'pages/models/service';
import { ReactNode } from 'react';
import { useMutation } from 'react-query';
import { runDeploy } from 'pages/remotes/deploy';

function ServiceList({ children }: { children: ReactNode }) {
  return (
    <Flex direction="column" css={[width100, { position: 'relative', gap: '12px' }]} as="ul">
      {children}
    </Flex>
  );
}

// TODO: build server에서 현재 build status 내려줘야함. 새로 고침의 경우 버튼 disable reset되어서 중복 요청 가능
function ServiceListRow({ name }: { name: ServiceName }) {
  const { mutateAsync: handleClick, isLoading } = useMutation(async () => {
    try {
      await runDeploy({ name });
      window.alert(`${name} 배포 완료!`);
    } catch (err) {
      window.alert(err);
    }
  });

  return (
    <Flex as="li" css={{ width: '90%', border: '1px solid #030303', padding: '12px' }} justify="space-between">
      <span>{name}</span>
      <button onClick={() => handleClick()} disabled={isLoading}>
        배포
      </button>
    </Flex>
  );
}

ServiceList.Row = ServiceListRow;

export default ServiceList;
