import { ToksHeader, Txt } from '@depromeet/toks-components';

import { JoinStudyBox } from 'components/JoinStudy/JoinStudyBox';

import { HeaderContainer, JoinGuide, pageTitle } from './style';

function JoinStudy() {
  return (
    <>
      <HeaderContainer>
        <ToksHeader imgUrl={'https://asset.tokstudy.com/img_penguin.png'} userName={'김채림'} children={undefined} />
      </HeaderContainer>
      <JoinGuide>
        <Txt size={46} weight={700} css={pageTitle}>
          똑스와 함께해 볼까요?
        </Txt>
      </JoinGuide>
      <JoinStudyBox />
    </>
  );
}

export default JoinStudy;
