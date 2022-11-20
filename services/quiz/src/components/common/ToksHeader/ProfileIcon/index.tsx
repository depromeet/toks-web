import img_penguin from 'img/img_penguin.png';

import { Img } from './style';

export function ProfileIcon() {
  return <Img src={img_penguin.src} alt="사용자 프로필 이미지" />;
}
