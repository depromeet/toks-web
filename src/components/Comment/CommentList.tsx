'use client';

import { ICON_URL } from '@/common/resourceUrl';
import clsx from 'clsx';
import Image from 'next/image';
import { Children, HTMLAttributes, useState } from 'react';

import { Text } from '../Text';

interface CommentListProps {
  children: React.ReactNode;
}

export function CommentList({ children }: CommentListProps) {
  const comments = Children.toArray(children);
  const [isFold, setIsFold] = useState(() => comments.length > 3);
  return (
    <div>
      <ul>{isFold ? Children.toArray(children).slice(0, 3) : children}</ul>
      {isFold && <MoreViewButton onClick={() => setIsFold(false)} />}
    </div>
  );
}

function MoreViewButton({ onClick }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <button
      className={clsx('flex', 'gap-x-1', 'items-center')}
      onClick={onClick}
    >
      <Text typo="body" color="gray10">
        댓글 더보기
      </Text>
      <Image
        src={ICON_URL.CHEVRON_DOWN}
        alt="더보기 아이콘"
        width={16}
        height={16}
      />
    </button>
  );
}
