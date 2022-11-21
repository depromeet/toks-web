import { ProfileButton } from './ProfileButton';

import { Container, Header, Title } from './style';

type HeaderProps = {
  children : React.ReactNode
};

export function ToksHeader(props : HeaderProps) {
  return (
    <Header>
      <Container>
        <Title>Toks</Title>
        <ProfileButton imgUrl={`https://asset.tokstudy.com/img_penguin.png`} userName={'윤두현'} />
      </Container>
      {props.children}
    </Header>
  );
}
