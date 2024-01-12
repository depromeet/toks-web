import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { ICON_URL, useSetDate } from '@/common';
import { Button } from '@/common/components/Button';
import { Text } from '@/common/components/Text';
import { ToksCalendar } from '@/common/components/ToksCalendar';
import { QUERY_KEYS } from '@/common/constants/queryKeys';

import { QuizProgress } from './QuizProgress';
import { getProgress } from '../../_lib/remotes/progress';
import { BottomSheetProps } from '../../_lib/types/bottomsheet';

export const ProgressCheckBottomSheet = ({ onClose }: BottomSheetProps) => {
  const { year, month } = useSetDate();

  const { data: progress } = useQuery({
    queryKey: QUERY_KEYS.GET_PROGRESS_INFO(month, year),
    queryFn: async () => {
      try {
        return await getProgress(month, year);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div className="flex max-h-bottomSheet flex-col justify-center px-20px py-16px">
      <button className="flex justify-end">
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
      <div className="my-20px flex justify-between">
        <div className="flex flex-col">
          <Text typo="headingL">{progress?.username}님, </Text>
          <div>
            <Text color="primaryDefault" typo="headingL">
              {progress?.attendance}번째{' '}
            </Text>
            <Text typo="headingL">출석 성공!</Text>
          </div>
        </div>
        <Image
          src={ICON_URL.EMOJI_CODING}
          alt="none quiz emoji"
          width={53}
          height={53}
        />
      </div>
      <div className="max-h-progressBottomSheet overflow-auto">
        {progress && (
          <QuizProgress
            todayDescription={progress.description1}
            totalDescription={progress.description2}
          />
        )}
        <div className="m-auto mb-20px mt-16px w-fit">
          <ToksCalendar />
        </div>
      </div>
      <Button
        onClick={() => onClose()}
        className="w-full"
        size="L"
        typo="subheadingBold"
        backgroundColor="primaryDefault"
      >
        확인
      </Button>
    </div>
  );
};
