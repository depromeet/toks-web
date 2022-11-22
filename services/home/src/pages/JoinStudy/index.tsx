import { JoinStudyBox } from 'components/JoinStudy/JoinStudyBox';
import { ToksHeader } from '@depromeet/toks-components';

import { HeaderContainer, JoinGuide } from './style';

function JoinStudy() {
  return (
    <>
      <HeaderContainer>
        <ToksHeader imgUrl={'https://asset.tokstudy.com/img_penguin.png'} userName={'김채림'} children={undefined} />
      </HeaderContainer>
      <JoinGuide>앞으로 똑스와 8주 동안 함께해볼까요?</JoinGuide>
      <JoinStudyBox />
    </>
  );
}

export default JoinStudy;
