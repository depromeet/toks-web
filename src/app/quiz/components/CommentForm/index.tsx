'use client';

import { useRouter } from 'next/navigation';
import { useRef } from 'react';

import { postCommentByQuizId } from '@/app/quiz/remotes/comment';
import { Button, Input } from '@/common';

interface CommentFormProps {
  commentCount: number;
  quizId: string;
}

export function CommentForm({ commentCount, quizId }: CommentFormProps) {
  const commentInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <form
      className="flex shrink-0 flex-col"
      onSubmit={async (e) => {
        e.preventDefault();
        if (commentInputRef.current) {
          await postCommentByQuizId(quizId, commentInputRef.current.value);
          await fetch('http://localhost:3000/api/revalidate?tag=quiz-comment');
          commentInputRef.current.value = '';
          router.refresh();
        }
      }}
    >
      <Input
        required
        ref={commentInputRef}
        className="mt-6px"
        type="text"
        placeholder="댓글을 남겨보세요."
        label={`댓글 ${commentCount}`}
        aria-label="댓글 작성 입력"
      />
      <div className="mt-12px flex justify-end">
        <Button
          backgroundColor="primaryDefault"
          typo="bodyBold"
          textColor="gray10"
          size="S"
          type="submit"
          aria-label="작성 확인 버튼"
        >
          확인
        </Button>
      </div>
    </form>
  );
}
