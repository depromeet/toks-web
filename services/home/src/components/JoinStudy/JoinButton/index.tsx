import { Txt } from '@depromeet/toks-components';

import { StudyJoinButton } from './style';

export function JoinButton() {
  return (
    <StudyJoinButton>
      <Txt size={16} weight={700} color={'gray100'}>
        스터디 참여하기
      </Txt>
    </StudyJoinButton>
  );
}
