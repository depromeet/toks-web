import { ToksHeader } from '@depromeet/toks-components';
import { Banner } from './components/Banner';
import { Wrapper } from './style';

function Intro() {
  return (
    <>
      {/* TODO: 해당 부분 Fixed 변경 */}
      <ToksHeader />
      <Wrapper>
        <Banner />
      </Wrapper>
    </>
  );
}

export default Intro;
