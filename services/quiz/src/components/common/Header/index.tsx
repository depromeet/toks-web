import ProfileIcon from './ProfileIcon';
import { headerCss, headerTitleCss } from './style';

function Header() {
  return (
    <header css={headerCss}>
      <div css={headerTitleCss}>Toks</div>
      <ProfileIcon />
    </header>
  );
}

export default Header;
