import { headers } from 'next/headers';

import { Comment, CommentForm, GetStartedButton } from '@/app/quiz/components';
import { getCommentsByQuizId } from '@/app/quiz/remotes/comment';

type Props = {
  params: {
    quizId: string;
  };
};

const getIsLogin = () => {
  const headerList = headers();
  const isLogin = headerList.get('isLogin') === 'true';
  return isLogin;
};

async function CommentPage({ params: { quizId } }: Props) {
  const comments = await getCommentsByQuizId(quizId);
  const isEmptyComment = comments.length === 0;
  const isLogin = getIsLogin();
  return (
    <div className="mt-32px flex flex-col gap-32px">
      {isLogin && (
        <CommentForm quizId={quizId} commentCount={comments.length} />
      )}
      {!isEmptyComment && (
        <Comment.List>
          {comments.map(({ id, nickname, content, likeCount, createdAt }) => (
            <Comment
              key={id}
              commentId={id}
              name={nickname}
              comment={content}
              timeAgo={createdAt}
              profileImgUrl={undefined}
              like={likeCount}
            />
          ))}
        </Comment.List>
      )}
      {!isLogin && <GetStartedButton isCommentEmpty={isEmptyComment} />}
    </div>
  );
}

export default CommentPage;
