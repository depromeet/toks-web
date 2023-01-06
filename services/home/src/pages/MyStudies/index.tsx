import { Layout } from '@depromeet/layout';
import { TOKS_HEADER_HEIGHT, Text } from '@depromeet/toks-components';
import { Flex } from '@toss/emotion-utils';
import { ReactElement } from 'react';

import StudyList from './components/StudyList';

export default function MyStudies() {
  return (
    <Flex.Center direction="column" justify="space-evenly" css={{ height: `calc(100vh - ${TOKS_HEADER_HEIGHT})` }}>
      <Text variant="title01" css={{ textAlign: 'center' }}>
        개발자를 위한 스터디, 똑스-잇!
      </Text>

      <StudyList />
    </Flex.Center>
  );
}

MyStudies.getLayout = function getLayout(page: ReactElement) {
  return <Layout fullWidth>{page}</Layout>;
};
