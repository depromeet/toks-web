import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { Quiz } from '@/app/quiz/models/quiz';
import { useAuth } from '@/common/hooks';
import { selectedTemporaryCategoryAtom } from '@/store';

import { getQuizList } from './apis';
import { useSelectedCategoriesQuery } from '../useSelectedCategoriesQuery';

export const useQuizListInfinityQuery = () => {
  const { isLogin } = useAuth();
  const selectedTemporaryCategory = useRecoilValue(
    selectedTemporaryCategoryAtom
  );
  const { data: selectedUserCategory } = useSelectedCategoriesQuery();

  const selectedCategoryIds = isLogin
    ? selectedUserCategory
    : selectedTemporaryCategory;

  return useInfiniteQuery({
    queryKey: [
      'quizList',
      {
        categoryIds: isLogin ? selectedUserCategory : selectedTemporaryCategory,
      },
      isLogin,
    ],
    queryFn: ({ pageParam = 0 }) => {
      return getQuizList({
        categoryIds: selectedCategoryIds || [],
        page: pageParam,
        size: 15,
      });
    },
    getNextPageParam: ({ page = 0, totalPage }) => {
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
        if (quiz.question.buttons.A?.imageUrl) {
          imageArray.push(quiz.question.buttons.A.imageUrl);
        }
        if (quiz.question.buttons.B?.imageUrl) {
          imageArray.push(quiz.question.buttons.B.imageUrl);
        }
        if (quiz.question.buttons.O?.imageUrl) {
          imageArray.push(quiz.question.buttons.O.imageUrl);
        }
        if (quiz.question.buttons.X?.imageUrl) {
          imageArray.push(quiz.question.buttons.X.imageUrl);
        }

        return imageArray;
      };

      const flattenContents = pages.flatMap(({ content }) => content);

      const formatterQuizList = flattenContents.map(
        ({ quiz, category, quizReplyHistoryCount, quizCommentCount }) => ({
          id: quiz.id,
          categoryTitle: category.name,
          likeCount: quizReplyHistoryCount,
          commentCount: quizCommentCount,
          quizDescription: quiz.question.question,
          quizType: quiz.quizType,
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
