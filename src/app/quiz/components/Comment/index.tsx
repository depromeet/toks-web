import { differenceInSeconds, format } from 'date-fns';

import { Avatar, Text } from '@/common';

import { CommentList } from './CommentList';
import LikeButton from './LikeButton';

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
  const convertTimeAgoFormat = (timeAgo: string) => {
    const nowDate = new Date();
    const createdDate = new Date(timeAgo);
    const diffSecond = differenceInSeconds(nowDate, createdDate);
    const MINUTE = 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 12;
    const MONTH = DAY * 29;
    if (diffSecond < MINUTE) {
      return '방금 전';
    }
    if (diffSecond < HOUR) {
      return `${Math.floor(diffSecond / MINUTE)}분 전`;
    }
    if (diffSecond < DAY) {
      return `${Math.floor(diffSecond / HOUR)}시간 전`;
    }
    if (diffSecond < MONTH) {
      return `${Math.floor(diffSecond / DAY)}일 전`;
    }
    return format(createdDate, 'yyyy.MM.dd');
  };
  return (
    <li>
      <div className="flex items-center gap-x-6px">
        <Avatar src={profileImgUrl} name={name} size="S" />
        <Text typo="bodyBold" color="white">
          {name}
        </Text>
        <Text typo="caption" color="gray60">
          {convertTimeAgoFormat(timeAgo)}
        </Text>
      </div>
      <div className="ml-30px mt-4px">
        <Text typo="body" color="gray20">
          {comment}
        </Text>
        <LikeButton
          commentid={commentId}
          className="mt-8px"
          like={like}
          isLiked={false}
        />
      </div>
    </li>
  );
}

Comment.List = CommentList;
