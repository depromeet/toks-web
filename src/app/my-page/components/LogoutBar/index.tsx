import Image from 'next/image';

import { ICON_URL, Text } from '@/common';

export const LogoutBar = () => {
  return (
    <div className="flex h-full w-full items-center justify-between rounded-12px bg-gray-100 px-20px py-16px">
      <Text typo="subheadingBold" color="gray10">
        로그아웃
      </Text>
      <Image
        src={ICON_URL.CHEVRON_RIGHT}
        alt="로그아웃 버튼"
        width={24}
        height={24}
      />
    </div>
  );
};
