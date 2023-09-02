import { useMutation } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

import { BottomSheet, Button, Text } from '@/common';

import { patchLogout } from '../../remotes/logout';

interface LogoutBottomSheetProps {
  onClick: () => void;
  isShow: boolean;
}

export const LogoutBottomSheet = ({
  onClick,
  isShow,
}: LogoutBottomSheetProps) => {
  const router = useRouter();
  const { mutate: logoutMutation } = useMutation(async () => {
    try {
      const res = await patchLogout();
      deleteCookie('accessToken');
      deleteCookie('refreshToken');
      //   TODO: path name 바뀔수도
      router.push('/toks-main');

      return res;
    } catch (err: unknown) {
      console.log(err);
    }
  });
  const onLogout = async () => {
    onClick();
    logoutMutation();
    console.log('logout');
  };
  return (
    <BottomSheet onClose={() => onClick()} isShow={isShow}>
      <div className="px-20px py-26px">
        <Text typo="headingL" color="gray10">
          로그아웃 하시겠어요?
        </Text>
        <div className="h-40px" />
        <Button
          className="w-full"
          size="L"
          typo="subheadingBold"
          backgroundColor="primaryDefault"
          onClick={() => onLogout()}
        >
          로그아웃
        </Button>
        <div className="h-12px" />
        <div className="w-full text-center">
          <Text typo="body" color="gray10" onClick={() => onClick()}>
            취소
          </Text>
        </div>
      </div>
    </BottomSheet>
  );
};
