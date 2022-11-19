import { Flex, width100 } from '@toss/emotion-utils';
import { ReactNode } from 'react';
import { useMutation, useQuery } from 'react-query';

import { ServiceName } from 'pages/models/service';
import { getDeployStatus, runDeploy } from 'pages/remotes/deploy';

function ServiceList({ children }: { children: ReactNode }) {
  return (
    <Flex direction="column" css={[width100, { position: 'relative', gap: '12px' }]} as="ul">
      {children}
    </Flex>
  );
}

function ServiceListRow({ name }: { name: ServiceName }) {
  const { data: deployStatus, refetch } = useQuery(getDeployStatus.queryKey, getDeployStatus);

  const { mutateAsync: handleClick, isLoading } = useMutation(async () => {
    try {
      await runDeploy({ name });
      window.alert(`${name} 배포 완료!`);
      await refetch();
    } catch (err) {
      window.alert((err as any).response.data.message);
    }
  });

  return (
    <Flex as="li" css={{ width: '90%', border: '1px solid #030303', padding: '12px' }} justify="space-between">
      <span>{name}</span>
      <button
        onClick={() => handleClick()}
        disabled={isLoading || deployStatus == null || deployStatus.status == 'inprogress'}
      >
        배포
      </button>
    </Flex>
  );
}

ServiceList.Row = ServiceListRow;

export default ServiceList;
