import { Metadata } from 'next';

import { QuizProvider, ScrollToTopButton } from '@/app/quiz/components';

import { fetchQuizDetailByQuizID } from '../remotes/quiz';

type Props = {
  detail: React.ReactNode;
  recommendation: React.ReactNode;
  params: { quizId: string };
};

export async function generateMetadata({
  params: { quizId },
}: Props): Promise<Metadata> {
  const quizDetail = await fetchQuizDetailByQuizID(quizId);

  return {
    openGraph: {
      title: '이런 퀴즈도 있어요!',
      description: quizDetail.quiz.title,
      images: 'https://toks-web-assets.s3.amazonaws.com/toks-og.png',
      type: 'website',
      siteName: 'Toks',
    },
  };
}

function QuizIdLayout({ detail, recommendation }: Props) {
  return (
    <main className="pb-80px">
      <QuizProvider>
        {detail}
        {recommendation}
        <ScrollToTopButton />
      </QuizProvider>
    </main>
  );
}

export default QuizIdLayout;
