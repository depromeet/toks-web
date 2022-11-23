import { Flex, Spacing } from '@toss/emotion-utils';
import StudyList from './components/StudyList';
import { Text } from '@depromeet/toks-components';

function MyStudis() {
  return (
    <Flex.Center direction="column">
      <Spacing size={136} />
      <Text variant="title01">개발자를 위한 스터디, 똑스-잇!</Text>

      <Spacing size={163} />
      <StudyList />
    </Flex.Center>
  );
}

export default MyStudis;
