'use client';

import { Comment, CommentForm, GetStartedButton } from '@/app/quiz/components';
import { useGetCommentListQuery } from '@/app/quiz/hooks/useGetCommentListQuery';
import { useAuth } from '@/common/hooks';

type Props = {
  params: {
    quizId: string;
  };
};

function CommentPage({ params: { quizId } }: Props) {
  const { data: comments } = useGetCommentListQuery(quizId);
  const { isLogin } = useAuth();

  if (comments === undefined) {
    return null;
  }

  const isEmptyComment = comments.length === 0;
  return (
    <div className="mt-32px flex flex-col gap-32px">
      {isLogin && (
        <CommentForm quizId={quizId} commentCount={comments.length} />
      )}
      {!isEmptyComment && (
        <Comment.List>
          {comments.map(
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
      )}
      {!isLogin && <GetStartedButton isCommentEmpty={isEmptyComment} />}
    </div>
  );
}

export default CommentPage;
