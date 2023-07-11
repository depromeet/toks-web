import clsx from 'clsx';

import { Comment, GetStartedButton } from '@/app/quiz/components';
import { getCommentsByQuizId } from '@/app/quiz/remotes/comment';

type Props = {
  params: {
    quizId: string;
  };
};

async function CommentPage({ params: { quizId } }: Props) {
  const comments = await getCommentsByQuizId(quizId);
  const isCommentEmpty = comments.length === 0;
  return (
    <div className={clsx('flex', 'flex-col', 'gap-8', 'mt-8')}>
      {!isCommentEmpty && (
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
      <GetStartedButton isCommentEmpty={isCommentEmpty} />
    </div>
  );
}

export default CommentPage;
