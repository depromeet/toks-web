import { FULL_HEIGHT } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';

import { CreateStudyForm } from './components/CreateStudyForm';

const CreateStudy = () => {
  return (
    <Flex.Center css={{ height: FULL_HEIGHT }}>
      <CreateStudyForm />
    </Flex.Center>
  );
};

export default CreateStudy;
