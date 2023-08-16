import clsx from 'clsx';

import { QuizButton, Thumbnail } from '@/app/quiz/components';
import { QuizButtonType } from '@/app/quiz/models/quiz';
import { getQuizDetailByQuizId } from '@/app/quiz/remotes/quiz';
import { Text, bgColor } from '@/common';

type Props = {
  params: {
    quizId: string;
  };
};

async function DetailPage({ params: { quizId } }: Props) {
  const {
    quiz: {
      title: quizTitle,
      tags,
      question: {
        imageUrl: oxImageUrl,
        buttons: { '1': button1, '2': button2 },
      },
      quizType,
      description: oxDescription,
      answer: oxAnswer,
    },
    category: { name: categoryName },
    quizReply,
    quizReplyCount: { totalCount, replyCount },
    isSubmitted,
  } = await getQuizDetailByQuizId(quizId);

  const isExistOXImage = Boolean(oxImageUrl);
  const isVisibleOXImage = !isSubmitted && isExistOXImage;
  const replyAnswer = quizReply?.answer;
  const isOXCorrectAnswer = replyAnswer === oxAnswer; // 퀴즈의 정답이 1혹은 2 사용자의 답안은 O혹은 X로 넘어오는 문제 해결 안된 상태
  const checkSameQuizType = (type: string) => quizType.startsWith(type);
  const checkSelectedAnswer = (buttonType: QuizButtonType) =>
    replyAnswer === buttonType;

  const answerCount = {
    left: replyCount?.A?.count ?? replyCount?.O?.count ?? 0,
    right: replyCount?.B?.count ?? replyCount?.X?.count ?? 0,
  };

  const answerPercentage = {
    left: Math.floor((answerCount.left / totalCount) * 100),
    right: Math.floor((answerCount.right / totalCount) * 100),
  };

  return (
    <section className={clsx(bgColor['gray110'], 'mt-8px rounded-16px p-20px')}>
      <div className="flex gap-8px">
        {[categoryName, ...tags].map((tagName, index) => (
          <Text
            key={`${tagName}-${index}`}
            typo="captionBold"
            color="primaryDefault"
          >
            {tagName}
          </Text>
        ))}
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
                imageUrl={button1.imageUrl}
                percentage={answerPercentage.left}
                participationLabel={`${answerPercentage.left}% (${answerCount.left}명)`}
                isSelected={checkSelectedAnswer('A')}
                name={button1.button.name}
              />
              <QuizButton
                isSubmitted={isSubmitted}
                imageUrl={button2.imageUrl}
                percentage={answerPercentage.right}
                participationLabel={`${answerPercentage.right}% (${answerCount.right}명)`}
                isSelected={checkSelectedAnswer('B')}
                name={button2.button.name}
              />
            </>
          ) : isSubmitted ? (
            <div className="mx-auto flex flex-col items-center">
              <Thumbnail OXType={isOXCorrectAnswer ? 'O' : 'X'} />
              <Text className="mt-20px " typo="headingL" color="gray10">
                {isOXCorrectAnswer
                  ? '딩동댕! 정답이에요.'
                  : '앗, 오답이에요! 정답은...'}
              </Text>
              <Text
                className="mt-2px "
                typo="bodyBold"
                color={isOXCorrectAnswer ? 'blue10' : 'dangerDefault'}
              >
                {checkSelectedAnswer('O')
                  ? `${answerPercentage.left}% (${answerCount.left}명)`
                  : `${answerPercentage.right}% (${answerCount.right}명)`}
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
                name="예"
              />
              <QuizButton
                isSubmitted={isSubmitted}
                OXType={isExistOXImage ? undefined : 'X'}
                name="아니오"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
