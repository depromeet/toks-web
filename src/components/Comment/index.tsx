import Image from 'next/image';

import { Text } from '../Text';

interface CommentProps {
  profileImgUrl: string | undefined;
  name: string;
  timeAgo: string;
  comment: string;
  like: number;
}

export function Comment({
  profileImgUrl,
  name,
  timeAgo,
  comment,
  like,
}: CommentProps) {
  const baseIcon =
    'https://toks-web-assets.s3.amazonaws.com/emoji/ic_base-grey.svg';
  return (
    <div>
      <div>
        <Image
          src={profileImgUrl ?? baseIcon}
          alt="프로필 아이콘"
          width={24}
          height={24}
        />
        <Text typo="bodyBold" color="white">
          {name}
        </Text>
        <Text typo="caption" color="gray60">
          {timeAgo}
        </Text>
      </div>
      <Text typo="body" color="gray20">
        {comment}
      </Text>
      <Text typo="body" color="white">
        {like}
      </Text>
    </div>
  );
}
