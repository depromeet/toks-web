import { IMAGE_URL } from '@depromeet/toks-components';

import { Banner } from './components/Banner';
import { Wrapper } from './style';

function Intro() {
  return (
    <Wrapper>
      <img
        src={IMAGE_URL.ONBOARDING_BACKGROUND}
        alt=""
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 'auto', zIndex: -1 }}
      />
      <Banner />
    </Wrapper>
  );
}

export default Intro;
