import Image from 'next/image';

import { ICON_URL } from '@/common';
import { BottomSheet } from '@/common/components/BottomSheet';
import { Button } from '@/common/components/Button';
import { Text } from '@/common/components/Text';
import { useLogoutQuery } from '@/queries';
import { BottomSheetProps } from '@/types/bottomsheet';

export const LogoutBottomSheet = ({ onClose, isShow }: BottomSheetProps) => {
  const { mutate: logoutMutation } = useLogoutQuery();
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