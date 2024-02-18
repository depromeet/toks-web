'use client';

import { Comment, CommentForm, GetStartedButton } from '@/app/quiz/components';
import {
  useGetCommentListQuery,
  useGetQuizDetailQuery,
} from '@/app/quiz/hooks';
import { useAuth } from '@/common';

type Props = {
  params: {
    quizId: string;
  };
};

function CommentPage({ params: { quizId } }: Props) {
  const { data: quizDetail } = useGetQuizDetailQuery(quizId);
  const { data: comments } = useGetCommentListQuery(quizId);
  const { isLogin } = useAuth();

  if (comments === undefined || quizDetail === undefined) {
    return null;
  }

  const { isSubmitted } = quizDetail;

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
}

export default CommentPage;
