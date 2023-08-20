import { QuizProvider, ScrollToTopButton } from '@/app/quiz/components';

type Props = {
  detail: React.ReactNode;
  comment: React.ReactNode;
  recommendation: React.ReactNode;
};

function QuizIdLayout({ detail, comment, recommendation }: Props) {
  return (
    <main className="pb-80px">
      <QuizProvider>
        {detail}
        {comment}
        {recommendation}
        <ScrollToTopButton />
      </QuizProvider>
    </main>
  );
}

export default QuizIdLayout;
