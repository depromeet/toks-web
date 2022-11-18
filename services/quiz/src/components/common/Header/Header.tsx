import ProfileIcon from './ProfileIcon/ProfileIcon';
import { headerCss, headerTitleCss } from './style/HeaderCss';

function Header() {
  return (
    <header css={headerCss}>
      <div css={headerTitleCss}>Toks</div>
      <ProfileIcon />
    </header>
  );
}

export default Header;
