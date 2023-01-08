import { FULL_HEIGHT } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';

import { StudyInfoBox } from './components/StudyInfoBox';

const CreateComplete = () => {
  return (
    <Flex.Center css={{ height: FULL_HEIGHT }}>
      <StudyInfoBox />
    </Flex.Center>
  );
};

export default CreateComplete;
