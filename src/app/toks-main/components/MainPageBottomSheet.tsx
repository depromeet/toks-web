import { BottomSheet } from '@/common';
import { useAuth, usePreventScroll } from '@/common/hooks';
import { BottomSheetProps } from '@/types/bottomsheet';

import { OnboardingBottomSheet } from './OnboardingBottomsheet/OnboardingBottomSheet';

export const MainPageBottomSheet = ({ onClose, isShow }: BottomSheetProps) => {
  const { isLogin } = useAuth();
  usePreventScroll(isShow);

  return (
    <BottomSheet onClose={() => onClose()} isShow={isShow}>
      {isLogin ? (
        <>로그인 성공~!!</>
      ) : (
        <OnboardingBottomSheet onClose={onClose} />
      )}
    </BottomSheet>
  );
};
