import Image from 'next/image';

import { ICON_URL } from '@/common';
import { Text } from '@/common/components/Text';

import { OnboardingCarousel } from './OnboardingCarousel';
import { BottomSheetProps } from '../../_lib/types/bottomsheet';

export const OnboardingBottomSheet = ({ onClose }: BottomSheetProps) => {
  return (
    <div className="relative max-h-bottomSheet px-20px py-24px">
      <div className="mx-auto flex w-full items-center justify-between pb-22px">
        <Text typo="headingM" color="gray10">
          똑스와 함께 시작해볼까요?
        </Text>
        <button>
          <Image
            src={ICON_URL.CLOSE}
            alt="close"
            width={24}
            height={24}
            onClick={() => {
              onClose();
            }}
          />
        </button>
      </div>
      <div>
        <OnboardingCarousel />
      </div>
    </div>
  );
};
