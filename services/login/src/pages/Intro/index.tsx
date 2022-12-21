import { Timer } from '@depromeet/toks-components';
import { Banner } from './components/Banner';
import { Wrapper } from './style';

function Intro() {
  return (
    <Wrapper>
      <Timer />
      <Banner />
    </Wrapper>
  );
}

export default Intro;
