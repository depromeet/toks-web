import { Text } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';

import StudyList from './components/StudyList';

function MyStudis() {
  return (
    <Flex.Center direction="column" justify="space-evenly" css={{ height: '90vh' }}>
      <Text variant="title01">개발자를 위한 스터디, 똑스-잇!</Text>

      <StudyList />
    </Flex.Center>
  );
}

export default MyStudis;
