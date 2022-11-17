import { headerCss, headerTitleCss } from "./style/HeaderCss";

function Header() {
    return (<header css={headerCss}>
      <div css={headerTitleCss}>Toks</div>
      <div>Profile</div>
    </header>);
  }
  
export default Header;
  