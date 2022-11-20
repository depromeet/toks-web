import ic_default_profile from 'img/ic_default_profile.png';

import { Img } from './style';

export function ProfileIcon() {
  return (
    <Img>
      <img src={ic_default_profile.src} alt="사용자 프로필 이미지" />
    </Img>
  );
}
