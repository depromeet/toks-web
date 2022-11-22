import { StudyJoinButton } from './style';
import { Txt } from '@depromeet/toks-components';

export function JoinButton() {
  return (
    <StudyJoinButton>
      <Txt size={16} weight={700} color={'gray100'}>
        스터디 참여하기
      </Txt>
    </StudyJoinButton>
  );
}
