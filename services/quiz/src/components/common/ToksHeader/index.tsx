import { ProfileButton } from './ProfileButton';
import { Header, Title, Wrapper } from './style';

type HeaderProps = {
  children: React.ReactNode;
};

export function ToksHeader(props: HeaderProps) {
  return (
    <Header>
      <Wrapper>
        <Title>Toks</Title>
        <ProfileButton imgUrl={`https://asset.tokstudy.com/img_penguin.png`} userName={'윤두현'} />
      </Wrapper>
      {props.children}
    </Header>
  );
}
