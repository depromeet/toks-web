import Image from 'next/image';

import ic_default_profile from '../../../../img/ic_default_profile.png';
import { Img } from './style';

function ProfileIcon() {
  return (
    <Img>
      <Image src={ic_default_profile} alt="사용자 프로필 이미지" />
    </Img>
  );
}

export default ProfileIcon;
