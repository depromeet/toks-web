import Image from 'next/image';

import { ICON_URL } from '@/common/constants';

export function FloatingButton() {
  return (
    <div className="flex h-50px w-50px flex-1 items-center justify-center rounded-full border-1px border-gray-70 bg-gray-90">
      <Image
        src={ICON_URL.EMOJI_DROOLING}
        alt="똑스 아이콘"
        width={32}
        height={32}
      />
    </div>
  );
}
