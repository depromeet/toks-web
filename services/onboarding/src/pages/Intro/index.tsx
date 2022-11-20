import { Image } from '@depromeet/toks-components';

function Intro() {
  return (
    <div
      style={{
        width: '200px',
        height: '200px',
      }}
    >
      <Image src="https://picsum.photos/200/300" mode="cover" alt="테스트" />
    </div>
  );
}

export default Intro;
