import { ProfileButton } from './ProfileButton';
import { Header, Title, Wrapper } from './style';

interface HeaderProps {
  imgUrl: string;
  userName: string;
  children?: React.ReactNode;
}

export function ToksHeader(props: HeaderProps) {
  return (
    <Header>
      <Wrapper>
        <Title>Toks</Title>
        <ProfileButton imgUrl={props.imgUrl} userName={props.userName} />
      </Wrapper>
      {props.children ?? null}
    </Header>
  );
}
