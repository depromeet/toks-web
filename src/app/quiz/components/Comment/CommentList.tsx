'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { Children, HTMLAttributes, useState } from 'react';

import { ICON_URL, Text } from '@/common';

interface CommentListProps {
  children: React.ReactNode;
}

export function CommentList({ children }: CommentListProps) {
  const comments = Children.toArray(children);
  const [isFold, setIsFold] = useState(() => comments.length > 3);
  return (
    <div>
      <ul className="flex flex-col gap-y-4">
        {isFold ? comments.slice(0, 3) : children}
      </ul>
      {isFold && (
        <div
          className={clsx(
            'flex',
            'justify-center',
            'px-3',
            'items-center',
            'h-8',
            'mt-8'
          )}
        >
          <MoreViewButton onClick={() => setIsFold(false)} />
        </div>
      )}
    </div>
  );
}

function MoreViewButton({ onClick }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <button className="flex items-center gap-x-4px" onClick={onClick}>
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
