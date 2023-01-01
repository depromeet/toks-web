import { Flex, FullHeight } from '@toss/emotion-utils';

import { QuizCreateEditor } from './components/QuizCreateEditor';
import { QuizCreateInputList } from './components/QuizCreateInputList';

const QuizCreatePage = () => {
  return (
    <FullHeight>
      <Flex
        css={{
          gap: '48px',
        }}
      >
        <QuizCreateEditor />
        <QuizCreateInputList />
      </Flex>
    </FullHeight>
  );
};

export default QuizCreatePage;
