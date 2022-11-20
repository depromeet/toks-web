import { ProfileButton } from './ProfileButton';
import { Container, Header, Title } from './style';

export function ToksHeader() {
  return (
    <Header>
      <Container>
        <Title>Toks</Title>
        <ProfileButton
          imgUrl={`https://asset.tokstudy.com/img_penguin.png`}
          userName={"윤두현"} />
      </Container>
    </Header>
  );
}
