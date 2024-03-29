'use client';

import clsx from 'clsx';

import {
  QuizButton,
  SkeletonQuizDetail,
  Thumbnail,
} from '@/app/quiz/components';
import {
  useGetQuizDetailQuery,
  useSubmitQuizMutation,
} from '@/app/quiz/hooks/';
import { OX, QuizButtonType } from '@/app/quiz/models/quiz';
import { Text, bgColor } from '@/common';
// import { Badge } from '@/common/components/Badge';

type Props = {
  params: {
    quizId: string;
  };
};

function DetailPage({ params: { quizId } }: Props) {
  const { submitQuiz } = useSubmitQuizMutation(quizId);
  const { data: quizDetail, isLoading } = useGetQuizDetailQuery(quizId);

  if (quizDetail === undefined || isLoading) {
    return <SkeletonQuizDetail />;
  }

  const {
    quizTitle,
    oxImageUrl,
    buttonLeft,
    buttonRight,
    quizType,
    oxDescription,
    oxAnswer,
    categoryName,
    quizReply,
    answerPercentage,
    answerParticipationLabel,
    isSubmitted,
  } = quizDetail;

  const isExistOXImage = Boolean(oxImageUrl);
  const isVisibleOXImage = !isSubmitted && isExistOXImage;
  const replyAnswer = quizReply?.answer;
  const isOXCorrectAnswer = replyAnswer === oxAnswer;
  const checkSameQuizType = (type: string) => quizType.startsWith(type);
  const checkSelectedAnswer = (buttonType: QuizButtonType) =>
    replyAnswer === buttonType;

  return (
    <div>
      <section
        className={clsx(bgColor['gray110'], 'mt-8px rounded-16px p-20px')}
      >
        <div className="flex items-center gap-[4px]">
          {/* <Badge label={checkSameQuizType('A_B_') ? 'AB' : 'OX'} /> */}
          <Text typo="captionBold" color="gray60">
            {categoryName}
          </Text>
        </div>
        <Text className="mt-12px block " typo="headingL" color="gray10">
          {quizTitle}
        </Text>
        <div className="mt-48px">
          {isVisibleOXImage && (
            <Thumbnail
              className="mb-24px w-full"
              imageUrl={oxImageUrl}
              name="OX퀴즈 설명"
            />
          )}
          <div className="flex gap-16px">
            {checkSameQuizType('A_B_') ? (
              <>
                <QuizButton
                  isSubmitted={isSubmitted}
                  imageUrl={buttonLeft.imageUrl}
                  percentage={answerPercentage.left}
                  participationLabel={answerParticipationLabel.left}
                  isSelected={checkSelectedAnswer('A')}
                  name={buttonLeft.button.name}
                  onClick={() => submitQuiz('A')}
                />
                <QuizButton
                  isSubmitted={isSubmitted}
                  imageUrl={buttonRight.imageUrl}
                  percentage={answerPercentage.right}
                  participationLabel={answerParticipationLabel.right}
                  isSelected={checkSelectedAnswer('B')}
                  name={buttonRight.button.name}
                  onClick={() => submitQuiz('B')}
                />
              </>
            ) : isSubmitted ? (
              <div className="mx-auto flex flex-col items-center">
                <Thumbnail OXType={oxAnswer as OX} />
                <Text className="mt-20px " typo="headingL" color="gray10">
                  {isOXCorrectAnswer
                    ? `딩동댕! 정답은 ${oxAnswer}에요.`
                    : `앗, 정답은 ${oxAnswer}에요.`}
                </Text>
                <Text className="mt-2px " typo="bodyBold" color="gray60">
                  {clsx(
                    '정답률',
                    oxAnswer === 'O'
                      ? answerParticipationLabel.left
                      : answerParticipationLabel.right
                  )}
                </Text>
                <Text className="mt-24px block" typo="body" color="white">
                  {oxDescription}
                </Text>
              </div>
            ) : (
              <>
                <QuizButton
                  isSubmitted={isSubmitted}
                  OXType={isExistOXImage ? undefined : 'O'}
                  name={buttonLeft.button.name}
                  onClick={() => submitQuiz('O')}
                />
                <QuizButton
                  isSubmitted={isSubmitted}
                  OXType={isExistOXImage ? undefined : 'X'}
                  name={buttonRight.button.name}
                  onClick={() => submitQuiz('X')}
                />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailPage;
