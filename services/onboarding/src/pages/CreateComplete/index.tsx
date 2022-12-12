import { flex, FullHeight } from '@toss/emotion-utils';
import { StudyInfoBox } from './components/StudyInfoBox';
const CreateComplete = () => {
  return (
    <FullHeight css={flex('center', 'center')}>
      <StudyInfoBox />
    </FullHeight>
  );
};

export default CreateComplete;
