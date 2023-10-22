import { BottomSheet } from '@/common';
import { useAuth } from '@/common/hooks';
import { BottomSheetProps } from '@/types/bottomsheet';

import { OnboardingBottomSheet } from './OnboardingBottomSheet';

export const MainPageBottomSheet = ({ onClose, isShow }: BottomSheetProps) => {
  const { isLogin } = useAuth();

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
