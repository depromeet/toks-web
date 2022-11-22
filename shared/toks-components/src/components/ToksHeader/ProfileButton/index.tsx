import { Button, Img, Text } from './style';

interface ProfileButtonProps {
  imgUrl: string;
  userName: string;
}

export function ProfileButton({ imgUrl, userName }: ProfileButtonProps) {
  return (
    <Button>
      <Img src={imgUrl} alt="사용자 프로필 이미지" />
      <Text>{userName}</Text>
    </Button>
  );
}
