import { ProfileIcon } from './ProfileIcon';
import { Header, HeaderContainer, HeaderTitle } from './style';

export function ToksHeader() {
  return (
    <Header>
      <HeaderContainer>
        <HeaderTitle>Toks</HeaderTitle>
        <ProfileIcon />
      </HeaderContainer>
    </Header>
  );
}
