import { useInfiniteQuery } from '@tanstack/react-query';

import { Quiz } from '@/app/quiz/models/quiz';

import { getQuizList } from './apis';

export const useQuizListInfinityQuery = () => {
  return useInfiniteQuery({
    queryKey: ['quizList'],
    queryFn: ({ pageParam = 0 }) => {
      return getQuizList({
        categoryIds: [],
        page: pageParam,
        size: 15,
      });
    },
    getNextPageParam: ({ page, totalPage }) => {
      if (page >= totalPage) {
        return undefined;
      }
      return page + 1;
    },
    select: ({ pageParams, pages }) => {
      const generatorImageArray = (quiz: Quiz) => {
        const imageArray: string[] = [];
        if (quiz.question.imageUrl) {
          imageArray.push(quiz.question.imageUrl);
        }
        if (quiz.question.buttons.A.imageUrl) {
          imageArray.push(quiz.question.buttons.A.imageUrl);
        }
        if (quiz.question.buttons.B.imageUrl) {
          imageArray.push(quiz.question.buttons.B.imageUrl);
        }
        if (quiz.question.buttons.O.imageUrl) {
          imageArray.push(quiz.question.buttons.O.imageUrl);
        }
        if (quiz.question.buttons.X.imageUrl) {
          imageArray.push(quiz.question.buttons.X.imageUrl);
        }

        return imageArray;
      };

      const flattenContents = pages.flatMap(({ content }) => content);

      const formatterQuizList = flattenContents.map(
        ({
          quiz,
          category,
          quizReplyHistoryCount,
          answerReplyCount,
          quizCommentCount,
        }) => ({
          id: quiz.id,
          categoryTitle: category.name,
          likeCount: quizReplyHistoryCount,
          commentCount: quizCommentCount + answerReplyCount,
          quizDescription: quiz.question.question,
          images: generatorImageArray(quiz),
        })
      );

      return {
        pages: formatterQuizList,
        pageParams,
      };
    },
  });
};
