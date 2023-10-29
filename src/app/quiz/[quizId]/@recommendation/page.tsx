import { Metadata } from 'next';

import { QuizCarousel } from '@/app/quiz/components';
import { getRecommendationByQuizId } from '@/app/quiz/remotes/recommendation';
import { Text } from '@/common';

type Props = {
  params: {
    quizId: string;
  };
};

export async function generateMetadata({
  params: { quizId },
}: Props): Promise<Metadata> {
  const quizRecommendModels = await getRecommendationByQuizId(quizId);
  const isQuizzesExist = quizRecommendModels.length !== 0;

  return {
    openGraph: {
      title: isQuizzesExist
        ? '이런 퀴즈도 있어요!'
        : '똑스 : 지식을 키우는 첫 시작!',
      description: isQuizzesExist
        ? quizRecommendModels[0].quiz.title
        : '똑스와 함께, 퀴즈로 똑똑해지고 더 나은 습관 만들기',
      images: '/toks-og.png',
      type: 'website',
      siteName: 'Toks',
    },
  };
}

async function RecommendatonPage({ params: { quizId } }: Props) {
  const quizRecommendModels = await getRecommendationByQuizId(quizId);
  const isQuizzesExist = quizRecommendModels.length !== 0;
  return (
    isQuizzesExist && (
      <div className="mt-64px">
        <Text className="inline-block" typo="subheadingBold" color="gray10">
          더 많은 퀴즈를 확인해보세요
        </Text>
        <QuizCarousel
          className="mt-16px"
          quizRecommendModels={quizRecommendModels}
        />
      </div>
    )
  );
}

export default RecommendatonPage;
