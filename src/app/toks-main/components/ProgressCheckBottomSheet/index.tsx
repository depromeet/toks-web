import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { Button, ICON_URL, ToksCalendar } from '@/common';
import { QUERY_KEYS } from '@/common/constants/queryKeys';

import { QuizProgress } from './QuizProgress';
import { getProgress } from '../../remotes/progress';
import { BottomSheetProps } from '../../types/bottomsheet';

export const ProgressCheckBottomSheet = ({ onClose }: BottomSheetProps) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const { data: progress } = useQuery(
    QUERY_KEYS.GET_PROGRESS_INFO(month, year),
    async () => {
      try {
        return await getProgress(month, year);
      } catch (e) {
        console.log(e);
      }
    }
  );

  console.log(progress);
  return (
    <div className="flex flex-col px-20px py-16px">
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
      {progress && (
        <QuizProgress
          todayDescription={progress.description1}
          totalDescription={progress.description2}
        />
      )}
      <div className="h-16px" />
      <ToksCalendar />
      <div className="h-20px" />
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
