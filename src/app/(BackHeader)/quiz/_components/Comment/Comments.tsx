import {
  Comment,
  CommentForm,
  GetStartedButton,
} from '@/app/(BackHeader)/quiz/_components';
import { useAuth } from '@/common';

import { useGetCommentListQuery } from '../../_hooks/useGetCommentListQuery';

type CommentsProps = {
  quizId: string;
  isSubmitted: boolean;
};

export const Comments = ({ quizId, isSubmitted }: CommentsProps) => {
  const {
    data: comments,
    // isLoading,
    // isFetching,
  } = useGetCommentListQuery(quizId);
  const { isLogin } = useAuth();
  if (!comments) {
    return null;
  }

  const isEmptyComment = comments?.length === 0;

  return (
    <div>
      {isSubmitted && (
        <div className="mt-32px flex flex-col gap-32px">
          {isLogin && (
            <CommentForm quizId={quizId} commentCount={comments?.length} />
          )}
          <Comment.List>
            {comments?.map(
              ({
                id,
                nickname,
                content,
                likeCount,
                createdAt,
                profileImageUrl,
                isLiked,
              }) => (
                <Comment
                  key={id}
                  quizId={quizId}
                  commentId={id}
                  name={nickname}
                  comment={content}
                  timeAgo={createdAt}
                  profileImgUrl={profileImageUrl}
                  like={likeCount}
                  isLiked={isLiked}
                />
              )
            )}
          </Comment.List>
          {!isLogin && <GetStartedButton isCommentEmpty={isEmptyComment} />}
        </div>
      )}
    </div>
  );
};
