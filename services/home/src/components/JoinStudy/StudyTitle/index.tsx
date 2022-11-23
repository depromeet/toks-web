import { Txt } from '@depromeet/toks-components';
import { Title } from './style';

export function StudyTitle() {
  const studyName = '아키텍쳐 크리너스';
  return (
    <Title>
      <Txt size={32} weight={700}>
        {studyName}
      </Txt>
    </Title>
  );
}
