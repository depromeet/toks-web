import { Metadata } from 'next';

import {
  QuizProvider,
  ScrollToTopButton,
} from '@/app/(BackHeader)/quiz/components';

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
      images: 'https://asset.tokstudy.com/toks-og.png',
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
