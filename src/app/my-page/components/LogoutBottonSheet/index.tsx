import { useMutation } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { BottomSheet, Button, ICON_URL, Text } from '@/common';

import { patchLogout } from '../../remotes/logout';

interface LogoutBottomSheetProps {
  onClose: VoidFunction;
  isShow: boolean;
}

export const LogoutBottomSheet = ({
  onClose,
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
    onClose();
    logoutMutation();
  };
  return (
    <BottomSheet onClose={() => onClose()} isShow={isShow}>
      <div className="px-20px py-26px">
        <div className="flex justify-between">
          <Text typo="headingL" color="gray10">
            로그아웃 하시겠어요?
          </Text>
          <Image
            onClick={() => onClose()}
            src={ICON_URL.SMALL_X}
            alt="바텀시트 닫기버튼"
            width={14}
            height={14}
          />
        </div>
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
          <Text typo="body" color="gray10" onClick={() => onClose()}>
            취소
          </Text>
        </div>
      </div>
    </BottomSheet>
  );
};
