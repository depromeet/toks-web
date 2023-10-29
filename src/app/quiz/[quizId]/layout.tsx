import { QuizProvider, ScrollToTopButton } from '@/app/quiz/components';

type Props = {
  detail: React.ReactNode;
  recommendation: React.ReactNode;
};

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
