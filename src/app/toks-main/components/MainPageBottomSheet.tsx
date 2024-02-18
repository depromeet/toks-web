import { BottomSheet } from '@/common';
import { BottomSheetProps } from '@/common/components/BottomSheet/types';
import { useAuth, usePreventScroll } from '@/common/hooks';

import { OnboardingBottomSheet } from './OnboardingBottomsheet';
import { ProgressCheckBottomSheet } from './ProgressCheckBottomSheet';

export const MainPageBottomSheet = ({ onClose, isShow }: BottomSheetProps) => {
  const { isLogin } = useAuth();
  usePreventScroll(isShow);

  return (
    <BottomSheet onClose={() => onClose()} isShow={isShow}>
      {isLogin ? (
        <ProgressCheckBottomSheet onClose={onClose} />
      ) : (
        <OnboardingBottomSheet onClose={onClose} />
      )}
    </BottomSheet>
  );
};
