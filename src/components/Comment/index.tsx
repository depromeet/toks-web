import { ICON_URL } from '@/common/resourceUrl';
import clsx from 'clsx';
import Image from 'next/image';

import { CommentList } from './CommentList';
import LikeButton from './LikeButton';
import { Text } from '../Text';

interface CommentProps {
  commentId: number;
  profileImgUrl: string | undefined;
  name: string;
  timeAgo: string;
  comment: string;
  like: number;
}

export function Comment({
  commentId,
  profileImgUrl,
  name,
  timeAgo,
  comment,
  like,
}: CommentProps) {
  return (
    <li>
      <div className={clsx('flex', 'gap-x-1.5', 'items-center')}>
        <Image
          src={profileImgUrl ?? ICON_URL.EMOJI_BASE_GRAY}
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
      <div className={clsx('mt-1', 'ml-[30px]')}>
        <Text typo="body" color="gray20">
          {comment}
        </Text>
        <LikeButton
          commentid={commentId}
          className="mt-2"
          like={like}
          isLiked={false}
        />
      </div>
    </li>
  );
}

Comment.List = CommentList;
