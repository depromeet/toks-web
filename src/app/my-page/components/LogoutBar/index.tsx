'use client';
import { useMutation } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';
import Image from 'next/image';

import { ICON_URL, Text } from '@/common';

import { patchLogout } from '../../remotes/logout';

export const LogoutBar = () => {
  // TODO: bottom sheet 연결
  // TODO: toast 에러처리
  // const [isShow, setIsShow] = useState(false);

  const { mutate: logoutMutation } = useMutation(async () => {
    try {
      const res = await patchLogout();
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      return res;
    } catch (err: unknown) {
      console.log(err);
    }
  });
  const onClick = async () => {
    logoutMutation();

    console.log('logout');
  };
  return (
    <div
      onClick={() => onClick()}
      className="flex h-full w-full items-center justify-between rounded-12px bg-gray-100 px-20px py-16px"
    >
      <Text typo="subheadingBold" color="gray10">
        로그아웃
      </Text>
      <Image
        src={ICON_URL.CHEVRON_RIGHT}
        alt="로그아웃 버튼"
        width={24}
        height={24}
      />
      {/* <BottomSheet onClose={() => setIsShow(false)} isShow={isShow}>
        <h1>hi</h1>
      </BottomSheet> */}
    </div>
  );
};
