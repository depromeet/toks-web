'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { postCommentByQuizId } from '@/app/quiz/remotes/comment';
import { Button, Input } from '@/common';

interface CommentFormProps {
  commentCount: number;
  quizId: string;
}

export function CommentForm({ commentCount, quizId }: CommentFormProps) {
  const [comment, setComment] = useState('');
  const router = useRouter();
  return (
    <form
      className="flex shrink-0 flex-col"
      onSubmit={(e) => {
        e.preventDefault();
        setComment('');
        postCommentByQuizId(quizId, comment).then(() => router.refresh());
      }}
    >
      <Input
        required
        className="mt-6px"
        type="text"
        placeholder="댓글을 남겨보세요."
        value={comment}
        label={`댓글 ${commentCount}`}
        aria-label="댓글 작성 입력"
        onChange={(e) => setComment(e.target.value)}
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
