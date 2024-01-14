'use client';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

import { Quiz } from '@/app/(BackHeader)/quiz/models/quiz';
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

  return useSuspenseInfiniteQuery({
    queryKey: [
      'quizList',
      {
        categoryIds: isLogin ? selectedUserCategory : selectedTemporaryCategory,
      },
      isLogin,
    ],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => {
      return getQuizList({
        categoryIds: selectedCategoryIds || [],
        page: pageParam as number,
        size: 15,
      });
    },
    getNextPageParam: ({ page = 0, totalPage }) => {
      if (page >= totalPage - 1) {
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
          categoryTitle: [category.name, ...quiz.tags].join(' '),
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
