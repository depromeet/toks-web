import clsx from 'clsx';

import { QuizButton } from '@/app/quiz/components';
import { Text, bgColor } from '@/common';

type Props = {
  params: {
    quizId: string;
  };
};

async function DetailPage({ params: { quizId } }: Props) {
  console.log(quizId);
  return (
    <section className={clsx(bgColor['gray110'], 'mt-8px rounded-16px p-20px')}>
      <Text className="block" typo="captionBold" color="primaryDefault">
        UI/UX
      </Text>
      <Text className="mt-12px block " typo="headingL" color="gray10">
        바텀시트 팝업의 닫기버튼, 어디가 좋을까?
      </Text>
      <div className="mt-48px">
        <div className="relative flex gap-16px">
          <QuizButton
            isSubmitted={false}
            imageUrl="https://source.unsplash.com/random/daily"
            name="하단"
          />
          <QuizButton
            isSubmitted={false}
            imageUrl="https://source.unsplash.com/random/daily"
            name="상단"
          />
        </div>
      </div>
    </section>
  );
}

// type QuizType = 'AB' | 'OX';

// function QuizSolveArea() {}

// function QuizAnswerArea() {}

export default DetailPage;
