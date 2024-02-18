import { Metadata } from 'next';

import { QuizProvider, ScrollToTopButton } from '@/app/quiz/components';

import { fetchQuizDetailByQuizID } from '../remotes/quiz';

type Props = {
  detail: React.ReactNode;
  recommendation: React.ReactNode;
  comment: React.ReactNode;
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
      images: 'https://asset.tokstudy.com/toks-og.png',
      type: 'website',
      siteName: 'Toks',
    },
  };
}

function QuizIdLayout({ detail, recommendation, comment }: Props) {
  return (
    <main className="pb-80px">
      <QuizProvider>
        {detail}
        {recommendation}
        {comment}
        <ScrollToTopButton />
      </QuizProvider>
    </main>
  );
}

export default QuizIdLayout;
