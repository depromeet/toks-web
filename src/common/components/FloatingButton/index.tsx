import clsx from 'clsx';
import Image from 'next/image';

import { ICON_URL } from '@/common/constants';

export function FloatingButton({
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx(
        'z-99 fixed bottom-56px right-26px flex h-50px w-50px flex-1 items-center justify-center rounded-full border-1px border-gray-70 bg-gray-90 hover:cursor-pointer',
        className
      )}
      {...rest}
    >
      <Image
        src={ICON_URL.EMOJI_DROOLING}
        alt="똑스 아이콘"
        width={32}
        height={32}
      />
    </button>
  );
}