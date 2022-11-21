import { JoinStudyBox } from 'components/JoinStudy/JoinStudyBox';

import { JoinGuide, Wrapper } from './style';

function JoinStudy() {
  return (
    <Wrapper>
      <JoinGuide>앞으로 똑스와 8주 동안 함께해볼까요?</JoinGuide>
      <JoinStudyBox />
    </Wrapper>
  );
}

export default JoinStudy;
