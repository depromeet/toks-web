import { Banner } from './components/Banner';
import { Wrapper } from './style';

function Intro() {
  return (
    <Wrapper>
      <img
        src="https://asset.tokstudy.com/onboarding-background.png"
        alt=""
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100vw', height: 'auto', zIndex: -1 }}
      />
      <Banner />
    </Wrapper>
  );
}

export default Intro;
