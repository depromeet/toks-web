import { ProfileIcon } from './ProfileIcon';
import { Container, Header, Title } from './style';

export function ToksHeader() {
  return (
    <Header>
      <Container>
        <Title>Toks</Title>
        <ProfileIcon />
      </Container>
    </Header>
  );
}
