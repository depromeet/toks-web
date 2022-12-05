import { FullHeight, flex } from '@toss/emotion-utils';

import { CreateStudyForm } from './components/CreateStudyForm';

const CreateStudy = () => {
  return (
    <FullHeight css={flex('center', 'center')}>
      <CreateStudyForm />
    </FullHeight>
  );
};

export default CreateStudy;
