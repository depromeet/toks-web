import { Text } from '@/common';

type QuizProgressProps = {
  todayDescription: string;
  totalDescription: string;
};

export const QuizProgress = ({
  todayDescription,
  totalDescription,
}: QuizProgressProps) => {
  return (
    <div className="flex flex-col rounded-12px bg-gray-100 px-20px py-16px">
      <Text color="gray40" typo="bodyBold">
        🔥 {todayDescription}
      </Text>
      <div className="h-8px"></div>
      <Text color="gray40" typo="bodyBold">
        🔥 {totalDescription}
      </Text>
    </div>
  );
};
