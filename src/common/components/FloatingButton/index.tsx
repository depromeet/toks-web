import clsx from 'clsx';
import Image from 'next/image';

import { LogClickEvent } from '@/common';
import { ICON_URL } from '@/common/constants';

export function FloatingButton({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <LogClickEvent
      eventPath={['toks', '메인페이지', '플로팅버튼', '플로팅버튼']}
    >
      <div className="pointer-events-none	sticky bottom-56px flex justify-end">
        <button
          className={clsx(
            'z-99 pointer-events-auto flex h-62px w-62px items-center justify-center rounded-full border-1px border-gray-70 bg-gray-90 hover:cursor-pointer',
            className
          )}
          {...rest}
        >
          <Image
            src={ICON_URL.EMOJI_DROOLING}
            alt="똑스 아이콘"
            width={40}
            height={40}
          />
        </button>
      </div>
    </LogClickEvent>
  );
}
